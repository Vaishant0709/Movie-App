import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminLogin() {
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [adminKey,setAdminKey]=useState("");

  const[data,setData]=useState(null);
  const[error,setError]=useState("");

  const handleSubmit= async (e)=>{
    e.preventDefault();
  }
  return (
    <>
    
      <div className='w-screen min-h-screen flex flex-col items-center justify-center font-poppins bg-zinc-700 text-white '>
        <div className='w-[55vh] h-[auto] bg-[#181818] flex flex-col px-10 py-7 shadow-black/50 rounded-xl'>
          <h3 className='text-2xl mb-6'>Admin Login</h3>

          <form onSubmit={handleSubmit}>
            
            <div className="flex bg-zinc-700 rounded-lg p-2 mb-6">
              <input
                required
                type="email"
                autoComplete="off"
                placeholder="Email"
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                className="flex-1 bg-transparent appearance-none border-none outline-none rounded-md m-2 "

              />
            </div>
            <div className="flex bg-zinc-700 rounded-lg p-2 mb-6">
              <input
                required
                type="password"
                autoComplete="off"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                className="flex-1 bg-transparent appearance-none border-none outline-none rounded-md m-2 autofill:bg-gray-700 focus:bg-zinc-700"
              />
            </div>
            <div className="flex bg-zinc-700 rounded-lg p-2 mb-6">
              <input
                required
                type="text"
                autoComplete="off"
                placeholder="Admin Key"
                onChange={(e)=>{setAdminKey(e.target.value)}}
                value={adminKey}
                className="flex-1 bg-transparent appearance-none border-none outline-none rounded-md m-2 autofill:bg-gray-700 focus:bg-zinc-700"
              />
            </div>
            
            <p className='my-7 mx-2 text-xl text-red-600'>{error} </p>

            <button className="px-4 py-2 w-full  bg-blue-600 text-white rounded-md cursor-pointer text-xl border-0 hover:bg-blue-700 transition">
              Login
            </button>
          </form >

        </div >

      </div >
    </>
  )
}

export default AdminLogin