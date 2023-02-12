import Image from 'next/image'
import { Inter } from '@next/font/google'
import Card from './Components/Card'
import ChevronDown from '@geist-ui/icons/chevronDown'
import Hero from './Components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
     <Hero />
     <div className='grid justify-center mt-24'>
       <Card />
     </div>
    
   </>
  )
}
