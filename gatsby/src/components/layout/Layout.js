import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default function Layout ({children, transparent, nav}) {
  return (
    <div className='relative'>
      { nav !== false && <Nav transparent={transparent} />}
      {/* Where the pages are displayed */}
      {children}
      <Footer />
    </div>
  )
}
