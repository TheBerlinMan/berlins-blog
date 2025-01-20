import { getAllBlogPosts } from '@/lib/blogs';
import { formatDateShort } from '@/lib/functions';
import Link from 'next/link';
import React from 'react'

interface BlogPost {
    date: string;
    slug: string;
    title: string;
    description?: string;
    category: string;
  }
  
  type PostsByYear = Record<number, BlogPost[]>;

const BlogList = () => {
    const posts = getAllBlogPosts();

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
    <div className="space-y-4">
        {Object.entries(organizedPosts)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearPosts]) => (
            <div key={year} className="flex gap-8">
              <div className="w-24">
                <h2 className="text-md font-semibold sticky top-4 mt-4">{year}</h2>
              </div>
              <div className="flex-1 space-y-4">
                {/* <hr className="border-gray-500 border-1 items-center" /> */}
                {yearPosts.map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    className="block"
                  >
                    <article className="bg-transparent p-4 border-b border-gray-300">
                      <div className="flex justify-between items-center text-black">
                        <h2 className="text-lg font-bold">{post.title}</h2>
                        <p className="text-md">{formatDateShort(post.date)}</p>
                      </div>
                      <p className="text-sm text-gray-500">#{post.category}</p>
                      {/* <p className="text-sm mt-4">{post.description}</p> */}
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
  )
}

export default BlogList