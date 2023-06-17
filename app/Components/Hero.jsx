import React from 'react'
import Accounts from './Accounts'
import Link from 'next/link'
const Hero = () => {

  return (
    <div className="hero mt-24 mb-20 bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Link href={'https://eyad.vercel.app'} className='text-xl font-bold border p-2 rounded'>New Portfolio: eyad.vercel.app</Link>
          <div className='flex flex-col'>
              <Accounts />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Hero