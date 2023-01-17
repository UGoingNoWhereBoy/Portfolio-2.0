'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Sun from '@geist-ui/icons/sun'
import Moon from '@geist-ui/icons/moon'
import Display from '@geist-ui/icons/display'
import { Themeloader } from './Loaders'


const Themeicon = () => {
    
    const {theme, setTheme } = useTheme();
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(false)
    }, [])
    

    if(Loading){
        return <Themeloader />
     }

  return (
    <div className="dropdown dropdown-end" id='header'>
    <label tabIndex={0} className="btn btn-outline border-0 m-1 bg-base-200">
     {theme === 'night' ? <Moon /> : theme === 'system' ? <Display /> :  <Sun /> }
    </label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52 bg-base-200">
      <li key={1}><a onClick={() => setTheme('system')}>System default <Display className='ml-auto'/></a></li>
      <li key={2}><a onClick={() => setTheme('night')}>Night <Moon className='ml-auto'/></a></li>
      <li key={3}><a onClick={() => setTheme('winter')}>Light <Sun className='ml-auto'/></a></li>
    </ul>
  </div>
  )
}

export default Themeicon