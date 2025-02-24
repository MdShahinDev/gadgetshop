import React from 'react'

const SectionTitle = (props) => {
  return (
    <>
        <div className="section-title container mx-auto responsive-padding text-center my-5">
            <h3 className='font-semibold '>{props.heading}</h3>
            <p className='my-2'>{props.text}</p>
        </div>
    </>
  )
}

export default SectionTitle