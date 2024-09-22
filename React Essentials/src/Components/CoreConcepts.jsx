import React from 'react'
import { CORE_CONCEPTS } from '../data.js'
import Card from './Card.jsx'

const CoreConcepts = () => {
  console.log("Rendering Core Concepts")
  return (
    <section className='pb-16 pt-10 mx-5 mt-5'>
      <h1 className=' text-white text-center font-semibold text-[21px] mb-5' >Core Concepts</h1>
      <main>
        <ul className=' grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
          <Card title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
          <Card {...CORE_CONCEPTS[1]} />
          <Card {...CORE_CONCEPTS[2]} />
          <Card {...CORE_CONCEPTS[3]} />
        </ul>
      </main>
    </section>
  )
}

export default CoreConcepts