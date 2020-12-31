import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default function Layout ({children}) {
  return (
    <>
      <Nav />
      {/* Where the pages are displayed */}
      <div className='py-20 min-h-screen bg-gray-900 text-blue-50'>
        <div className='container mx-auto'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
