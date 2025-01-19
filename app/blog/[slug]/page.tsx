import { getAllBlogPosts, getBlogPost } from '@/lib/blogs'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

interface Props {
  params: Promise<{
    slug: string
  }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

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
  )
}