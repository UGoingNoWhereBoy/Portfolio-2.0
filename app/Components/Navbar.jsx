import Themeicon from "./Themeicon"
import Link from "next/link"

const Navbar = () => {

  return (
  <div className="navbar bg-base-200 fixed top-0 z-50">
  <div className="navbar-start">
  <Link href='/' className="btn btn-ghost normal-case sm:text-2xl text-xl">Eyad's Portfolio</Link>

  </div>
  <div className="navbar-center">
    
  </div>
  <div className="navbar-end">
    <Themeicon />
  </div>
</div>
  )
}

export default Navbar