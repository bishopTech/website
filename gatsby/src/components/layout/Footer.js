import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import {faGithub, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer () {
  const {image, youtube, instagram, twitter, github, coffee} = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "images/bishopTechFullLogo.png"}) {
        childImageSharp {
          fluid( maxWidth: 1000, quality: 100 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      youtube: file(relativePath: { eq: "images/icons/BT - Social - YT - LG.svg" }) {
        publicURL
      }

      instagram: file(relativePath: { eq: "images/icons/BT - Social - IG - LG.svg" }) {
        publicURL
      }

      twitter: file(relativePath: { eq: "images/icons/BT - Social - TWT - LG.svg" }) {
        publicURL
      }

      github: file(relativePath: { eq: "images/icons/BT - Social - GH - LG.svg" }) {
        publicURL
      }

      coffee: file(relativePath: { eq: "images/icons/BT - Social - BMAC - LG.svg" }) {
        publicURL
      }
    }
  `)

  // console.log('Footer', image.file.childImageSharp.fluid)

  return (
    <footer className='bg-darkest-blue md:h-32 md:flex lg:justify-center md:items-center lg:px-4 lg:justify-between'>
      <div className='pt-4 md:pt-0 md:w-1/3 flex justify-center items-center'>
        <Img fluid={image.childImageSharp.fluid} className='py-8 px-28' imgStyle={{objectFit: 'contain'}} />
      </div>

      <div className='mt-6 md:mt-0 md:w-2/3 lg:w-1/3 flex justify-center items-center text-white space-x-12'>
        <a href='https://www.youtube.com/channel/UCC0ivjsHB186_KKPJ0JlR_g' target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transform duration-300 transition'>
          <img src={youtube.publicURL} alt='Pixelated Youtube' className='footerIcon' width={40} height={40} />
        </a>
        <a href='https://www.instagram.com/bishop.tech/' target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transform duration-300 transition'>
          <img src={instagram.publicURL} alt='Pixelated Youtube' className='footerIcon' height={40} width={40} />
        </a>
        <a href='https://twitter.com/bishoptech_' target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transform duration-300 transition'>
          <img src={twitter.publicURL} alt='Pixelated Youtube' className='footerIcon' height={40} width={40} />
        </a>
        <a href='https://github.com/bishopTech' target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transform duration-300 transition'>
          <img src={github.publicURL} alt='Pixelated Youtube' className='footerIcon' height={40} width={40} />
        </a>
        <a href='https://www.buymeacoffee.com/bishoptech' target='_blank' rel='noopener noreferrer'
          className='hover:scale-110 transform duration-300 transition'>
          <img src={coffee.publicURL} alt='Pixelated Youtube' className='footerIcon' height={35} width={30} />
        </a>
      </div>
      <div className='mt-6 pb-4 md:pb-0 md:mt-0 md:w-1/3 md:hidden lg:block block'>
        <p className='text-center text-lg text-base text-white'>
          Crafted with ❤️ by Chris Bishop
        </p>
      </div>

    </footer>
  )
}

// Old Footer:

// <footer className='bg-darkest-blue md:h-32 md:flex md:justify-center md:items-center lg:px-4 justify-between'>
//   <div className='pt-4 md:pt-0 md:w-1/3 flex justify-center items-center'>
//     <Img fluid={image.file.childImageSharp.fluid} className='py-8 px-28' imgStyle={{objectFit: 'contain'}} />
//   </div>
//
//   <div className='mt-6 md:mt-0 md:w-1/3 flex justify-center items-center text-white space-x-12'>
//     <a href='https://www.youtube.com/channel/UCC0ivjsHB186_KKPJ0JlR_g' target='_blank' rel='noopener noreferrer' className='hover:text-red-600'>
//       <FontAwesomeIcon icon={faYoutube} size={'6xl'} className='text-4xl' />
//     </a>
//     <a href='https://www.instagram.com/bishop.tech/' target='_blank' rel='noopener noreferrer' className='text-white hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-md py-0.5 px-1'>
//       <FontAwesomeIcon icon={faInstagram} size={'6xl'} className='text-4xl' />
//     </a>
//     <a href='https://twitter.com/bishoptech_' target='_blank' rel='noopener noreferrer' className='hover:text-blue-300'>
//       <FontAwesomeIcon icon={faTwitter} size={'6xl'} className='text-4xl' />
//     </a>
//     <a href='https://github.com/bishopTech' target='_blank' rel='noopener noreferrer' className='hover:text-gray-600'>
//       <FontAwesomeIcon icon={faGithub} size={'6xl'} className='text-4xl' />
//     </a>
//   </div>
//   <div className='mt-4 pb-4 md:pb-0 md:mt-0 md:w-1/3 '>
//     <p className='text-center text-lg text-base text-white'>
//       Crafted with ❤️ by Chris Bishop
//     </p>
//   </div>
// </footer>
