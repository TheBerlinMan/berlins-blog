import { getCurrentDateLong } from "@/lib/functions";
import Navbar from "./components/Navbar";

export default function Home() {
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

      <Navbar />
    </div>
  );
}
