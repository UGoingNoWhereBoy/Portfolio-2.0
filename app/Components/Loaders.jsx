

export const Themeloader = () => {
    return (
        
        <div className="dropdown dropdown-end">
            <div className="animate-pulse flex space-x-4">
             <label tabIndex={0} className="btn btn-outline border-0 m-1 bg-slate-700 w-12"></label>
            </div>
        </div>
    )
}


export const Heroloader = () => {
    return (
        <div className="dropdown dropdown-end">
        <div className="animate-pulse flex space-x-4">
         <label tabIndex={0} className="btn btn-outline border-0 m-1 bg-slate-700 w-full"></label>
        </div>
    </div>
    )
}


export const Cardloader = () => {
    return ( 
        <>
          <h1 className="text-center text-2xl mb-4 text-red-800">Looks like there was an error fetching the data!</h1>
          <p className="text-center text-red-700 mb-8">Make sure you're online, Refresh the page, if this issue persists email me at ugnw20@gmail.com</p>
          <div className='flex flex-col items-center'>
          <span className="button-coloring h-16 sm:w-96 w-48">
            <span className="button-background"></span>
            <span className="button-text bg-base-200 text-2xl"><div className="bg-slate-700 rounded-md h-10 w-4/6 animate-pulse"></div></span>
          </span>
        </div> 
        <div className="card lg:w-[900px] md:w-[700px] w-[100%] bg-base-300 shadow-xl mb-8 mt-8">
            <div className="animate-pulse space-x-4">
                <div className="bg-slate-700 rounded-md w-[100%] h-[500px]"></div>
                <div className="flex-1 space-y-6 py-1">
                </div>
            </div>
        </div>
       </>
    )
}
