'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Feather from '@geist-ui/icons/feather'
import { Heroloader } from './Loaders'

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
   "retro", "cyberpunk", "valentine", "halloween", "garden", "forest",
    "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", 
    "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
    "night", "coffee", "winter"
]

const Themes = () => {
    
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  })

  if(loading){
    return <Heroloader />
  }

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn sm:btn-wide btn-outline m-1">Extra themes <Feather  className='sm:ml-auto ml-4'/></label>
      <ul tabIndex={0} className="dropdown-content menu p-2
       shadow bg-base-300 rounded-box w-full h-24 overflow-x-hidden overflow-y-scroll block">
        {themes.map((i, k) => (
        <li className='items-center w-full' key={k}><a onClick={() => setTheme(i)}>{i}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Themes