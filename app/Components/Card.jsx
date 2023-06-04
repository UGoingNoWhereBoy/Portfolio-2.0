import Github  from "@geist-ui/icons/github"
import Radio from '@geist-ui/icons/radio'
import Youtube from '@geist-ui/icons/youtube'
import { getClient, urlFor } from "../../lib/sanity.server"
import Images from "./Images"
import { Cardloader } from "./Loaders"

const Card = async() => {
  
  const data = await getClient()

  return (
    <>
    {data.errno ? <Cardloader /> :
    <>

    {data?.map((i, k) => (
    <div key={k}>
     <div className='flex justify-center items-center '>
          <span className="button-coloring h-16 sm:w-96 w-48 lg:mr-auto lg:mb-0 mb-8">
            <span className="button-background"></span>
            <span className="button-text p-4 text-center bg-base-200 sm:text-2xl text-xl">{i?.title}</span>
          </span>
    
      </div>   
    <div className="card lg:w-[900px] md:w-[700px] w-[100%] bg-base-300 shadow-xl mb-8 mt-8" id={i?._rev}>
    <div>
      
      <figure className='rounded-b-none rounded-t-xl'>
        <Images urlProps={urlFor(i?.image?.asset).width(1920).height(1080).url()}/>
      </figure>
      <div className="card-body">
          <h2 className="card-title">
          {i?.title}
          </h2>
          <p>{i?.body}</p>
          <div className="flex flex-wrap mt-2 mb-2">
            <div className={`${i.github === undefined ? "tooltip tooltip-top" 
             : "tooltip tooltip-top tooltip-primary" }`} data-tip={`${i?.github === undefined ? "Private Repo" : "Github Repo"}`}>
              <a href={i?.github} target='_blank' className='btn btn-md md:btn-lg mr-2 mb-2 btn-outline btn-primary'
               disabled={i?.github === undefined ? true : false}><Github /></a>
            </div>
            <div className="tooltip tooltip-top tooltip-secondary" data-tip={`${i?.demo === undefined ? 'No demo' : 'Live demo'}`}>
              <a href={i?.demo} target='_blank' className="btn btn-md md:btn-lg mr-2 mb-2 btn-outline btn-secondary"
              disabled={i?.demo === undefined ? true : false}><Radio /></a>
            </div>
            <div className="tooltip tooltip-top tooltip-accent" data-tip={`${i?.video ? "Youtube video" : "No video"}`}>
              <a href={i?.video} disabled={i?.video === undefined ? true : false} target='_blank' className="btn btn-md md:btn-lg mr-2 btn-outline btn-accent"><Youtube /></a>
            </div>
          </div>
          <h1 className="ml-2 text-gradient-to-r from-cyan-500 to-blue-500">Technologies used</h1>
          <div className="flex flex-wrap">
            {i?.stack?.map((s, k) => (
            <div key={k} className="card-actions justify-start p-2">
              <div className="btn btn-primary text-base">{s}</div>
            </div>
            ))}
          </div>
      </div>
      </div>
    </div>
    <div className="divider"></div> 
    </div>))}
    </>}
    </>
    
  )
}

export default Card
