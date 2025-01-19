import { getCurrentYear } from '@/lib/functions'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto text-gray-500 text-sm text-center py-4">
      <p>
        © {getCurrentYear()}
      </p>
    </footer>
  )
}

export default Footer