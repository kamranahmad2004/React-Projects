import React from 'react'

const Card = (props) => {
  return (
    <div className=' border rounded-lg shadow-lg border-gray-50 md:ms-3 md:me-3 ms-1 me-1 p-5 text-white '>
      <li>
        <img src={props.image} alt={props.title} className=' m-auto' />
        <h2 className=' font-semibold text-[19px] text-center pb-3'>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    </div>
  )
}

export default Card