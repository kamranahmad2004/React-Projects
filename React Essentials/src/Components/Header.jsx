import React from 'react'
import logo from '../assets/react-logo.png'

const genRandomNum = (max) => {
    const num = Math.floor(Math.random() * (max + 1))
    return num;
}

const reactDescriptions = ["Fundamental", "Core", "Crucial"]

const Header = () => {
    const desc = reactDescriptions[genRandomNum(2)]
  return (
    <header className=' flex flex-col items-center text-center'>
        <img src={logo} alt="react-logo"  width={130}/>
        <p className=' text-white text-2xl font-semibold'>React Essentials</p>
        <h3 className=' text-white text-[19px] font-medium'>4 {desc} concepts every react developer must understand</h3>
    </header>
  )
}

export default Header