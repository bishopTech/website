import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default function Layout ({children}) {
  return (
    <>
      <Nav />
      {/* Where the pages are displayed */}
      <div className='min-h-screen bg-darkest-blue text-blue-50'>
        <div className=''>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
