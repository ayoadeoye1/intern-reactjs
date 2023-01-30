import React from 'react'

const Header = () => {

    const time = new Date().getHours();
    let greet;

    if(time >= 0 && time <= 12){
        greet = "Morning";
    }else if(time >= 12 && time <= 16){
        greet = "Afternoon";
    }else if(time >= 16 && time <= 24){
        greet = "Evening";
    }
    
  return (
    <div className='h-20 rounded-md shadow-xl text-pink-500'>
        <h1 className='m-6 font-semibold text-center text-xl'>Good {greet}! Explore around</h1>
    </div>
  )
}

export default Header