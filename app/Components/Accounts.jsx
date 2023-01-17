import HeartFill from '@geist-ui/icons/heartFill'
import { fetchAccounts } from '../../lib/sanity.server'

const Themes = async() => {
  const data = await fetchAccounts()

  return (
    <div className="dropdown mt-8">
      <label tabIndex={0} className="btn sm:btn-wide btn-outline m-1">Contact me <HeartFill  className='sm:ml-auto ml-4'/></label>
      <ul tabIndex={0} className="dropdown-content menu p-2
       shadow bg-base-300 rounded-box w-full h-24 overflow-x-hidden overflow-y-scroll block">
        {data?.map((i, k) => (
         <li key={k}><a href={i?.link} className="tooltip tooltip-bottom" 
         data-tip={i?.uname} target='_blank'>{i?.account}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Themes