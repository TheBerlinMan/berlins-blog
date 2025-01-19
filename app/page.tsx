import { getAllBlogPosts } from '@/lib/blogs'
import Link from 'next/link'

export default function Home() {
  const posts = getAllBlogPosts()

  return (
    <div className="max-w-4xl mx-auto px-16 py-16">
      <h1 className="text-3xl font-bold mb-4">Berlin&apos;s Blog</h1>
      <p className='text-lg mb-8'>They say it&apos;s a good idea to host your own blog.</p>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="p-4 border-2 rounded-md border-green bg-zinc-800">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-2">{post.date}</p>
              {/* <p className="text-lg">{post.description}</p> */}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}