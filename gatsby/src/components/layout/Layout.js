import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default function Layout ({children}) {
  return (
    <>
      <Nav />
      {/* Where the pages are displayed */}
      <div className='min-h-screen bg-gray-900 text-blue-50'>
        <div className='container py-5 mx-auto'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
