'use client'
import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { config } from '../../lib/sanity.config'



const studioConfig = defineConfig(config)


const Adminpage = () => {
  return <NextStudio config={studioConfig} />
} 

export default Adminpage