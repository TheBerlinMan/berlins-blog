import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/tabs'
import BlogList from './BlogList'
import About from './About'
import Contact from './Contact'

const Navbar = () => {
  return (
    <Tabs defaultValue="blogs" className='mt-6'>
      <div className="flex justify-center mb-4">
        <TabsList>
          <TabsTrigger value="blogs">Blog</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
        </div>
        {/* <hr className="border-gray-500 my-4" /> */}
        <TabsContent value="blogs">
          <BlogList />
        </TabsContent>
        <TabsContent value="about">
          <About />
        </TabsContent>
        <TabsContent value="contact">
          <Contact />
        </TabsContent>
      </Tabs>  )
}

export default Navbar