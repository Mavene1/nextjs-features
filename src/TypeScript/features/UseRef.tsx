"use client"

import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleClick = ()=>{
    console.log("Username is: "+ usernameInputRef.current?.value)
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-4">
          <input
            ref={inputRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // id="input"
            // type="text"
            placeholder="Focus here"
          />
        </div>
        <div className="mb-4">
          <input
            ref={usernameInputRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // id="input"
            // type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
          onClick={handleClick}
            className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
