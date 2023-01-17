import React from 'react'
import Themes from './Themes'
import Accounts from './Accounts'
const Hero = () => {

  return (
    <div className="hero mt-24 mb-20 bg-base-100">
      <div className="hero-content text-center">
          <div className="max-w-md">
        
          <div className='flex flex-col'>
              <Themes />
          </div>
          <div className='flex flex-col'>
              <Accounts />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Hero