import { getAllBlogPosts, getBlogPost } from "@/lib/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { formatDateLong } from "@/lib/functions";

interface Props {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-16 py-8">
      <div className="max-w-4xl prose-sm bg-white rounded-md p-8 shadow-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <div className="text-sm text-gray-500 mt-8 text-right">
          {formatDateLong(post.date)}
        </div>
      </div>
      <br />
      <Link className="text-sm text-gray-500" href="/">
        ← Back Home
      </Link>
    </div>
  );
}
