import React from 'react'
import ay from '../assets/ay.jpg'
import ayo from '../assets/ayo.jpg'
import ayob from '../assets/ayob.jpg'
import man from '../assets/man.jpg'
import menu from '../assets/menu.png'
import simulator from '../assets/simulator.png'
import smi from '../assets/smi.jpg'

const Body = () => {

    const arr = [smi, man, ay, ayo, ayob, menu, simulator];

  return (
    <div className='shadow-md'>
        <p className='text-pink-500 m-4 '>Welcome to ayoadeoye react app. Built with react js and tailwind css!</p>
        
        <center className='m-2 shadow-md sm:flex flex-row overflow-scroll' >
        {
            arr.map((ele) =>{
                const id = ele+Date.now()
                return <img className=' p-6 content-center rounded-full h-[300px] w-[300px] sm:h-[450px] w-[445px]' key={id} src={ele} alt='imag' />
            } 
            )
        }
        </center>
        <div className='text-center'>
            <h2 className='text-xl underline'>About</h2>
            <h3 className='m-4'>
                <p className=' font-bold'>ayoadeoye</p> He is a FullStack web developer, highly proficent in javascript, with good experience in React js, redux toolkit, tailwindcss, nodejs, express js, databases and more.
                checkout <a className='text-blue-400' href='http://54.166.200.49:8000'>my portifolio</a> website for more infomation.
                <p className=' font-bold'>But more focus on node js.</p>
            </h3>
            <h3 className='m-4'>
                <p className=' font-bold'>page</p> this page was built with react js and tailwind css only. hosted on netlify!
            </h3>
        </div>
    </div>
  )
}

export default Body