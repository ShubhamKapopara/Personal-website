import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  tableauLink?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  const files: string[] = [];
  
  function scanDirectory(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        scanDirectory(fullPath);
      } else if (entry.isFile() && path.extname(entry.name) === ".mdx") {
        // Store relative path from the base directory
        files.push(path.relative(dir, fullPath));
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    tableauLink: data.tableauLink || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    // Create slug from filename only (ignore subdirectory structure)
    // e.g., "certificates/deloitte-certificate.mdx" -> "deloitte-certificate"
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

// Cache for posts to avoid repeated file system reads
type PostData = ReturnType<typeof getMDXData>;
const postsCache = new Map<string, PostData>();

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  const cacheKey = postsDir;
  
  // Return cached data if available
  if (postsCache.has(cacheKey)) {
    return postsCache.get(cacheKey)!;
  }
  
  // Read and cache the data
  const data = getMDXData(postsDir);
  postsCache.set(cacheKey, data);
  return data;
}

// Function to clear cache (useful for development or after file changes)
export function clearPostsCache() {
  postsCache.clear();
}
