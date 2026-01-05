import Link from "next/link";
import Image from "next/image";
import React, { JSX } from "react";
 

export default function NavBar(): JSX.Element {
  return (
    <nav className="  
    fixed
    top-0
    flex items-center justify-end 
    z-50 w-11/12 
    backdrop-blur-lg  
    bg-background/20
    rounded-full
    mt-5
    max-w-2xl
    h-13
    p-4
    left-1/2
    -translate-x-1/2
    shadow-gray-300/50
    hover:bg-white/60
    dark:shadow-black/50
    dark:
    hover:backdrop-blur-lg
    transition-all duration-300
    px-8 py-4
    " >
       <Image id="Logo"
       src="/logo.svg" 
       alt="Logo" width={300} height={300} className="mr-auto" />
       <div className=" flex gap-4">
       <Link href="/" className="text-lg font-bold 
       text-gray-800 hover:text-red-400 
       hover:underline hover:shadow-lg 
       transition duration-300 ease-in-out hover:shadow-red-400  
       cursor-pointer">
        Home
      </Link>
        <Link href="/" className="text-gray-800 
        hover:text-red-400 hover:underline 
        hover:shadow-lg transition duration-300 ease-in-out hover:shadow-red-400 
        cursor-pointer">
          About
        </Link>
        <Link href="/contact" className="text-gray-800 
        hover:text-red-400 hover:underline 
        hover:shadow-lg transition duration-300 ease-in-out hover:shadow-red-400 
        cursor-pointer">
          Contact
        </Link>
        </div>
      
     </nav>
    
    );

}
