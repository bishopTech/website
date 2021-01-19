import React from 'react'

function Category ({category}) {
  return (
    <div className='hover:underline mr-2'>
      {category.title}
    </div>
  )
}

export default Category
