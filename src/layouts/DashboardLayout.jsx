import { signOut } from "firebase/auth"
import { Link, Outlet } from "react-router-dom"
import auth from "../firebase/firebase.config"


function DashboardLayout() {
  const logout = ()=>{
    signOut(auth)
    
  }
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
      {/* Sidebar content here */}
     
        <div>
          <li><Link to={'/dashboard/manage-recipies'}>manage All recipies</Link></li>
          <li><Link to={'/dashboard/add-recipies'}>Add Recipie</Link></li>
        </div>
        <div>
        <Link className="btn btn-neutral mr-2" to={'/'} >Home</Link>
          <button className="btn btn-error" onClick={logout}>LogOut</button>
          
        </div>
      
    </ul>
  
  </div>
</div>
  )
}

export default DashboardLayout
