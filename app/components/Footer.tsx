import { getCurrentYear } from '@/lib/functions'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto text-gray-500 text-sm text-center py-4">
      <hr className="border-gray-500 border-1 mb-2" />
      <div className="flex justify-around">
        <p className="text-gray-500 text-sm">
          &quot;Just keep swimming.&quot;
        </p>
        <p>
          © {getCurrentYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer