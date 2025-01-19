import { getBlogPost, getAllBlogPosts } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import Link from "next/link";


export default async function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  return (
    <div className="max-w-4xl mx-auto px-16 py-8">
      <div className="text-gray-500 mb-4">{post.date}</div>
      <div className="max-w-4xl prose-sm">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <br />
      <br />
      <Link href="/">← Back Home</Link>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}