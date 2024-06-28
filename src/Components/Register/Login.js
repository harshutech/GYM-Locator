import React, { useState } from 'react'

export const Login = () => {

  const [credentials, setcredentials] = useState({email:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email, password:credentials.password})
    });
    const json = await response.json()
    console.log(json);
  }

  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex items-center mt-40 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Login Now</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="  Type here" name='email' value={credentials.email} onChange={onChange} type="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" placeholder='  Type here' name='password' value={credentials.password} onChange={onchange} type="password" />
          </div>
          <button type='submit' className="w-full btn">Login</button>
        </div>
      </div>
    </div>
      </form>
  )
}
