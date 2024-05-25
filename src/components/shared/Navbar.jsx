import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom"
import auth from "../../firebase/firebase.config";



function Navbar() {
  const [user] = useAuthState(auth  );
const [signOut] = useSignOut(auth)
  const logout= async () => {
   const success = await signOut();
   if (success ) {
    alert("logged out")
   }
  }
  
  return (
    <div className="sticky top-0 z-30">
      <div className="navbar bg-base-100 px-16 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <Link to="/">Home </Link>
        </li>
        <li>
            <Link to="about">About </Link>
        </li>
        <li>
            <Link to="contact">contact </Link>
        </li>
    
        
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
            <Link to="/">Home </Link>
        </li>
        <li>
            <Link to="about">About </Link>
        </li>
        <li>
            <Link to="contact">contact </Link>
        </li>
    </ul>
  </div>
  <div className="navbar-end">

   {
    user?.email?
  <>
    
    <div className="avatar placeholder mr-2">
      <div className="bg-neutral text-neutral-content rounded-full w-8">
        <span className="text-xs">{user.email}</span>
      </div>
    </div>
    <Link to="/dashboard" className="mr-2">Dashboard</Link>
    <button className="btn" onClick={logout}>Log out</button>

  </>
    :
    <>
    <Link to={'login'} className="btn mr-5  ">Login</Link>
   <Link to={'register'} className="btn">Register</Link>
   </>
   }
  </div>
</div>
    </div>
  )
}

export default Navbar
