import { getAllBlogPosts } from '@/lib/blogs'
import Link from 'next/link'
import { formatDateShort, getCurrentDateLong } from '@/lib/functions'

interface BlogPost {
  date: string;
  slug: string;
  title: string;
  description?: string;
  category: string;
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
      <h1 className="text-3xl font-bold">Berlin&apos;s Blog</h1>
      <p className='text-md mb-4 text-gray-500'>{getCurrentDateLong()}</p>
      <p className='text-md mb-4'>They say it&apos;s a good idea to host your own blog. I&apos;m not sure I&apos;ve ever had a 
        thought of consequence, but just in case I do, here we are.</p>
      <p className='text-md mb-4'>For now, all posts will fall into two categories: coding lessons and my musings.</p>
      <hr className='border-gray-500 mb-4' />
      <div className="space-y-4">
        {Object.entries(organizedPosts)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearPosts]) => (
            <div key={year}>
              <h2 className="text-lg font-semibold mb-2">{year}</h2>
              <div className="space-y-4 mb-8">
                {yearPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
                    <article className="p-4 bg-transparent rounded-md border-2 border-black">
                      <div className="flex justify-between items-center text-black">
                        <h2 className="text-lg font-bold">{post.title}</h2>
                        <p className="text-md">{formatDateShort(post.date)}</p>
                      </div>
                      <p className="text-sm text-gray-500">#{post.category}</p>
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