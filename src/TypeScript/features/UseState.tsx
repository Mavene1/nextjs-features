"use client"

import React, { useState } from 'react'

type User = {
    name:string,
    sessionId:number
}

const UseState = () => {
    const [username, setUsername]=useState("")
    const [user, setUser]=useState<User|null>(null)

    const handleChange =(e:React.ChangeEvent<HTMLInputElement> )=>{
        setUsername(e.target.value)
    }
    const handleClick =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setUser({
            name:username,
            sessionId:Math.random()
        })
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        {user?`${user.name} is logged in`:<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">
              Input
            </label>
            <input
            onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="input"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
            onClick={handleClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>}
      </div>
    </div>
  )
}

export default UseState