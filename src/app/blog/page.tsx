import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { ContactForm } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
        {/* Description (new) */}
        <p
          style={{
            fontSize: "16px",
            marginTop: 8,
            color: "var(--muted)",
            maxWidth: 920,
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          {blog.description}
        </p>
      </Heading>

      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Work in Progress and Learnings
        </Heading>
        <Posts 
          include={[
            "data-warehouse",
            "twitter-sentimental-analytics", 
            "movie-review-analysis",
            "sign-language-recognition"
          ]} 
          columns="2" 
        />
        <ContactForm marginBottom="l" />
      </Column>
    </Column>
  );
}
