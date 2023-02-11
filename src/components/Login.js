const Login = ()=>{
   return (
   
     <div className="text-center">
      <div className="font-bold"> Login</div>
        <div className="mt-3">
            <label>Username</label>
            <input type="text" className="border border-b-slate-400  ml-1"/>
        </div>

        <div className="mt-1">
            <label>Password</label>
            <input type="password"  className="border border-b-slate-400  ml-1"/>
        </div>
     </div>
   )
}
export default Login;