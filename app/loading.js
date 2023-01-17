
const loading = () => {
  return (
    
    <div className="grid justify-center mt-24">
     
    <div className='flex flex-col items-center'>
        <span className="button-coloring h-16 sm:w-96 w-48">
        <span className="button-background"></span>
        <span className="button-text bg-base-200 text-2xl">
            <div class="bg-slate-700 rounded-md h-10 w-4/6 animate-pulse"></div></span>
        </span>
    </div> 
    <div className="card lg:w-[900px] md:w-[700px] w-[100%] bg-base-300 shadow-xl mb-8 mt-8">
        <div class="animate-pulse space-x-4">
            <div class="bg-slate-700 rounded-md w-[100%] h-[500px]"></div>
            <div class="flex-1 space-y-6 py-1">
            </div>
        </div>
    </div>
   </div>
  )
}

export default loading