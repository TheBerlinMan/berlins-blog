// import { getAllBlogPosts } from "@/lib/blogs";
// import Link from "next/link";
import { getCurrentDateLong } from "@/lib/functions";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/tabs";
import BlogList from "./components/BlogList";

// interface BlogPost {
//   date: string;
//   slug: string;
//   title: string;
//   description?: string;
//   category: string;
// }

// type PostsByYear = Record<number, BlogPost[]>;

export default function Home() {
  // const posts = getAllBlogPosts();

  // New function to organize posts by year
  // const organizePostsByYear = (posts: BlogPost[]): PostsByYear => {
  //   return posts.reduce((acc, post) => {
  //     const year = new Date(post.date).getFullYear();
  //     if (!acc[year]) {
  //       acc[year] = [];
  //     }
  //     acc[year].push(post);
  //     return acc;
  //   }, {} as PostsByYear);
  // };

  // const organizedPosts = organizePostsByYear(posts);

  return (
    <div className="max-w-4xl mx-auto px-16 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold">Berlin&apos;s Blog</h1>
      <p className="text-md mb-4 text-gray-500">{getCurrentDateLong()}</p>
      <p className="text-md mb-4">
        They say it&apos;s a good idea to host your own blog. I&apos;m not sure
        I&apos;ve ever had a thought of consequence, but just in case I do, here
        we are.
      </p>
      <p className="text-md mb-4">
        For now, all posts will fall into two categories: coding lessons and my
        musings.
      </p>
      {/* <hr className="border-gray-500 mb-4" /> */}
      {/* End of Header */}

      <Tabs defaultValue="blogs">
        <TabsList>
          <TabsTrigger value="blogs">Blog</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="blogs"><BlogList /></TabsContent>
        <TabsContent value="about">Testing</TabsContent>
        <TabsContent value="contact">Testing</TabsContent>
        
      </Tabs>

      {/* Blog Posts */}
      {/* <div className="space-y-4">
        {Object.entries(organizedPosts)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearPosts]) => (
            <div key={year} className="flex gap-8">
              <div className="w-24">
                <h2 className="text-md font-semibold sticky top-4 mt-4">{year}</h2>
              </div>
              <div className="flex-1 space-y-4">
                <hr className="border-gray-500 border-1 items-center" />
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
                      <p className="text-sm mt-4">{post.description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div> */}
      {/* End of Blog Posts */}
    </div>
  );
}
