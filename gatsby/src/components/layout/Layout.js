import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
export default function Layout ({children}) {
  return (
    <>
      <Nav />
      {/* Where the pages are displayed */}
      {children}
      <Footer />
    </>
  )
}
