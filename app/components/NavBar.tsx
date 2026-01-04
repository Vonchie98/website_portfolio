import Link from "next/link";
import Image from "next/image";
import "./NavBar.css";
import React, { JSX } from "react";
 

export default function NavBar(): JSX.Element {
  return (
    <nav className=" sticky top-0
    flex items-center justify-end 
    z-50   
    bg-transparent  
    " >
       <Image id="Logo"
       src="/logo.svg" 
       alt="Logo" width={300} height={300} className="mr-auto" />
       <div className=" flex gap-4">
       <Link href="/" className="text-xl font-bold 
       text-gray-800 hover:text-red-400 
       hover:underline hover:shadow-lg 
       transition duration-300 ease-in-out hover:shadow-red-400  
       cursor-pointer">
        Home
      </Link>
        <Link href="/about" className="text-gray-800 
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
