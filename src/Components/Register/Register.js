import React from 'react'

export const Register = () => {
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers:{
        'content-Type':'application/json'
      }
    });
    const json = await response.json()
    console.log(json);
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex items-center mt-40 px-4 sm:px-6 lg:px-8 ">
      
      <div className="w-full max-w-md mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Register Now</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
        </div>
        <div className="space-y-4">

          <div className="space-y-2">
            <label htmlFor="name">UserName </label>
            <input type="text" className="form-control" id="name" onChange={onchange} required  name='name' placeholder="Enter UserName" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" onChange={onchange} required  name='email' placeholder="Enter email" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password">password </label>
            <input type="password" className="form-control" onChange={onchange} required minLength={5}   name='password' id="password" placeholder="Password" />
          </div>

          <div className="space-y-2">
            <label htmlFor="con-password">confirm password</label>
            <input type="password" className="form-control" onChange={onchange} required minLength={5}   name='cpassword' id="con-password" placeholder="confirm password" />
          </div>
          <button type='submit' className="w-full btn" variant="outline">
            Sign up
          </button>
        </div>
      </div>
    </div>
      </form>
  )
}
