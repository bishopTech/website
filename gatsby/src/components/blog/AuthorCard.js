import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export default function AuthorCard (props) {
  const {personalImage, youtube, instagram, linkedin, github, coffee} = useStaticQuery(graphql`
    query {
      personalImage: file(relativePath: { eq: "images/small-personal.JPG" }) {
        publicURL
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width:100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    
      youtube: file(relativePath: { eq: "images/icons/BT - Social - YT - LG.svg" }) {
        publicURL
      }

      instagram: file(relativePath: { eq: "images/icons/BT - Social - IG - LG.svg" }) {
        publicURL
      }

      linkedin: file(relativePath: { eq: "images/icons/BT - Social - LI - LG.svg" }) {
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

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>Author</h1>
      <div className='flex px-8 py-4 mt-8 text-white transition duration-700 border rounded-lg shadow-lg space-x-14 hover:shadow-2xl bg-darker-blue'>
        <div className='flex flex-col items-center justify-center text-center'>
          <img src={personalImage.publicURL} className='rounded-full' width={150} />
          <h2 className='mt-2 text-xl'>Chris Bishop</h2>
          <h4 className='text-gray-400 text-md'>Creator of Bishop.Tech</h4>
        </div>
        <div className='space-y-4'>
          <h1 className=''>Socials:</h1>
          <div className='flex flex-col space-y-3'>
            <a href='https://www.youtube.com/channel/UCC0ivjsHB186_KKPJ0JlR_g' target='_blank' rel='noopener noreferrer'
              className='flex items-center transition duration-300 transform hover:scale-110'>
              <img src={youtube.publicURL} alt='Pixelated Youtube logo' className='' width={20} height={20} />
              <h4 className='ml-2'>Youtube</h4>
            </a>
            <a href='https://www.instagram.com/bishop.tech/' target='_blank' rel='noopener noreferrer'
              className='flex items-center transition duration-300 transform hover:scale-110'>
              <img src={instagram.publicURL} alt='Pixelated Instagram logo' className='' height={20} width={20} />
              <h4 className='ml-2'>Instagram</h4>
            </a>
            <a href='https://www.linkedin.com/in/bishoptech' target='_blank' rel='noopener noreferrer'
              className='flex items-center transition duration-300 transform hover:scale-110'>
              <img src={linkedin.publicURL} alt='Pixelated LinkedIn logo' className='' height={20} width={20} />
              <h4 className='ml-2'>LinkedIn</h4>
            </a>
            <a href='https://github.com/bishopTech' target='_blank' rel='noopener noreferrer'
              className='flex items-center transition duration-300 transform hover:scale-110'>
              <img src={github.publicURL} alt='Pixelated Github logo' className='' height={20} width={20} />
              <h4 className='ml-2'>Github</h4>
            </a>
            <a href='https://www.buymeacoffee.com/bishoptech' target='_blank' rel='noopener noreferrer'
              className='flex items-center transition duration-300 transform hover:scale-110'>
              <img src={coffee.publicURL} alt='Pixelated Buy me a coffee logo' className='' height={20} width={20} />
              <h4 className='ml-2 tracking-tighter'>Buy me a Coffee</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
