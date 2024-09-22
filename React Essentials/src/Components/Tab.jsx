import React from 'react'
import TabButton from './TabButton'
import { useState } from 'react';
import { EXAMPLES } from '../data';

const Tab = () => {
    // we are storing identifiers in this state (topic), so we target it to access data
    // Everytime the data will change on basis of click, now it's fully dynamic 
    const [topic, setTopic] = useState('components')
    const selectData = (selection) => {
        setTopic(selection)
    }
    return (
        <>
            <menu className=' flex gap-8 ms-6 mt-10' >
                {/* now if we click on any tab the data about tab stores in state manager (topic) done by it's setter function */}
                <TabButton onSelect={() => selectData('components')} onChoose={topic === 'components'} label={'Components'} ></TabButton>
                <TabButton onSelect={() => selectData('jsx')} label={'Jsx'} onChoose={topic === 'jsx'} ></TabButton>
                <TabButton onSelect={() => selectData('props')} label={'Props'} onChoose={topic === 'props'} ></TabButton>
                <TabButton onSelect={() => selectData('state')} label={'State'} onChoose={topic === 'state'} ></TabButton>
            </menu>

            <section className=' bg-[#1a31b1] w-[65%] ms-6 my-5 p-6 rounded-lg'>
                <div>
                    <h3 className=' text-[19px] font-semibold mb-4' >{EXAMPLES[topic].title}</h3>
                    <p>{EXAMPLES[topic].description}</p>
                    <pre>
                        <code>{EXAMPLES[topic].code}</code>
                    </pre>
                </div>
            </section>
        </>
    )
}

export default Tab