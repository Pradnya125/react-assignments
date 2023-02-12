import { Link } from "react-router-dom";

const Header =()=>{
  return(
    <div className="bg-slate-700 flex justify-between text-white h-9">
        <div className="font-bold text-2xl ">App1</div>
       <nav >        
          <ul className="flex ">
            <Link to="/" className="p-2 mx-3">Home</Link>
            <Link to='/about'  className="p-2 mx-3">About</Link>
            <Link to='/contact'  className="p-2 mx-3">Contact</Link>
            <button className="mr-2 border border-cyan-50 px-2">Login</button>            
          </ul>
         
        </nav> 
     
    </div>
  )
}
export default Header;