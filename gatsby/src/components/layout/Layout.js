import React from 'react'
import {Link} from 'gatsby'

export default function Layout ({children}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/hire'>Hire</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* Where the pages are displayed */}
        {children}
      </div>
    </div>
  )
}
