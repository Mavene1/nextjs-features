"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../lib/ThemeContext";

const UseContext = () => {
    const {state,dispatch}=useContext(ThemeContext);
    console.log("State: ",state)


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked");
  };
  const handleClickFont = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Font Clicked");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={()=>dispatch({type: "CHANGE_THEME"})}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Change Theme
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={()=>dispatch({type: "CHANGE_FONTSIZE", payload: 20 })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Change Font
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
