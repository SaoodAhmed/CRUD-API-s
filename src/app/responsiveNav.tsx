"use client";

import { useState } from "react";

const ResponsiveNav =  ({data}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="flex justify-between items-center">
        <div>Logo</div>
        <div className="flex gap-6 items-center">
          <ul className="hidden md:flex gap-x-4 list-none">
            {
              data.data.map((item:any)=>(
                <li key={item.lebel}>
                  {item.label}
                </li>
              ))
            }
           
          </ul>
          <div className="flex gap-4">
            <p>Search</p>
            <p> | </p>
            <p>Bell icon</p>
          </div>
          <div className="block md:hidden" onClick={() => setIsOpen(true)}>Hamburger</div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-0 bottom-0 h-screen bg-slate-400 p-3 duration-300">
          <div onClick={() => setIsOpen(false)}>close</div>
          <ul className="space-y-4 list-none  ">
            <li>Home</li>
            <li>Courses Blog</li>
            <li>Pc Requirements</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
