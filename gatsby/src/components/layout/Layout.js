import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {graphql, useStaticQuery} from 'gatsby'
import {animateScroll as scroll} from 'react-scroll'
export default function Layout ({children, transparent, nav}) {
  const {toTopIcon} = useStaticQuery(graphql`
    query {
      toTopIcon: file(relativePath: { eq: "images/icons/BT - GE - Arrow Curve - LG.svg" }) {
        publicURL
      }
    }
  `)

  const showBelow = 300

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const [show, setShow] = useState(!showBelow)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div className='relative'>

      { nav !== false && <Nav transparent={transparent} />}
      {/* Where the pages are displayed */}
      {children}
      <Footer />
      { show &&
      <div className='p-4 rounded-full bg-darkest-blue fixed bottom-4 right-4 '
        onClick={scrollToTop}
      >
        <img src={toTopIcon.publicURL} alt='to top icon' className='text-white h-4' />
      </div> }
    </div>
  )
}
