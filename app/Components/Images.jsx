'use client'
import Image from "next/image"
import { useState } from "react"


const Images = ({urlProps}) => { 

   
    const [isLoading, setLoading] = useState(true)
        
    return (
        <>
        <Image
        className={isLoading ? 'bg-slate-800 animate-pulse space-x-4' : null}
        src={urlProps}
        width={1920}
        height={1080}
        blurDataURL={urlProps}
        placeholder="blur"
        onLoadingComplete={() => setLoading(false)}
        alt="Project picture"
        />
        </>
    )
    
   }
   
   export default Images