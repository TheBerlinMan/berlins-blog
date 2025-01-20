import { getAllBlogPosts } from '@/lib/blogs'
import Link from 'next/link'
import { formatDateShort } from '@/lib/functions'

interface BlogPost {
  date: string;
  slug: string;
  title: string;
  description?: string;
}

type PostsByYear = Record<number, BlogPost[]>;

export default function Home() {
  const posts = getAllBlogPosts()

  // New function to organize posts by year
  const organizePostsByYear = (posts: BlogPost[]): PostsByYear => {
    return posts.reduce((acc, post) => {
      const year = new Date(post.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {} as PostsByYear);
  };

  const organizedPosts = organizePostsByYear(posts);

  return (
    <div className="max-w-4xl mx-auto px-16 py-16">
      <h1 className="text-3xl font-bold mb-4">Berlin&apos;s Blog</h1>
      <p className='text-lg mb-8'>They say it&apos;s a good idea to host your own blog.</p>
      <div className="space-y-4">
        {Object.entries(organizedPosts)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearPosts]) => (
            <div key={year}>
              <h2 className="text-2xl font-bold mb-4">{year}</h2>
              <div className="space-y-4 mb-8">
                {yearPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
                    <article className="p-4 bg-zinc-800 rounded-md">
                      <div className="flex justify-between items-center text-white">
                        <h2 className="text-xl">{post.title}</h2>
                        <p className="">{formatDateShort(post.date)}</p>
                      </div>
                      {/* <p className="text-lg">{post.description}</p> */}
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}