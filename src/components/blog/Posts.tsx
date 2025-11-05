import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  include?: string[];
  tag?: string;
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  include,
  tag,
  direction,
}: PostsProps) {
  // Get posts (cached by utils.ts)
  const allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Apply filters efficiently
  let filteredBlogs = allBlogs;
  
  if (include && include.length) {
    const includeSet = new Set(include);
    filteredBlogs = filteredBlogs.filter((post) => includeSet.has(post.slug));
  }

  if (exclude.length) {
    const excludeSet = new Set(exclude);
    filteredBlogs = filteredBlogs.filter((post) => !excludeSet.has(post.slug));
  }

  if (tag) {
    filteredBlogs = filteredBlogs.filter((post) => post.metadata.tag === tag);
  }

  // Sort by date (newest first) - only if needed
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Apply range filter
  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}
