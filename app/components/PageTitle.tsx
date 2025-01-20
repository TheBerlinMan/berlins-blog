import { getCurrentDateLong } from '@/lib/functions'
import React from 'react'

const PageTitle = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Berlin&apos;s Blog</h1>
      <p className="text-md mb-4 text-gray-500">{getCurrentDateLong()}</p>
    </div>
  )
}

export default PageTitle