import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  // Get projects (cached by utils.ts)
  let filteredProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match) - use Set for O(1) lookup
  if (exclude && exclude.length > 0) {
    const excludeSet = new Set(exclude);
    filteredProjects = filteredProjects.filter((post) => !excludeSet.has(post.slug));
  }

  // Sort by date (newest first)
  const sortedProjects = filteredProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Apply range filter
  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          tableauLink={post.metadata.tableauLink || ""}
        />
      ))}
    </Column>
  );
}
