import React from 'react'

function SliderItem({title,text}) {
  return (
    <div className='slider__item'>
     <h2 className='slider__title'>{title}</h2>
     <p className='slider__text'>{text}</p>
    </div>
  )
}

export default SliderItem