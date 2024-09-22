import React from 'react'

const TabButton = ({ label, onSelect, onChoose }) => {
    return (
        <li className={`text-[17px] font-semibold ps-6 shadow-md border pe-6 border-[#4063ff] py-1 rounded-md ${onChoose ? 'bg-blue-700 border-none text-white' : 'text-gray-300 hover:text-white hover:border-white'} `} onClick={onSelect} ><button>{label}</button></li>
    )
}

export default TabButton