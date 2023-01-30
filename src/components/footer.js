import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-300'>
        <div className=''>
            <p className='p-6 text-center'>copyright&nbsp;
            &copy;
            &nbsp;
            {
              new Date().getFullYear()
            }&nbsp; 
            ayoadeoye
            </p>
        </div>
    </div>
  )
}

export default Footer