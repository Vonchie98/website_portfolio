import Image from "next/image";

export default function under_construction(){
    return (
        <div>
        <h1 className="absolute inset-0  bg-white/75 shadow-lg flex items-center justify-center text-4xl font-extrabold text-white animate-pulse">
            Sorry this part isn't done yet
        </h1>
        
        <Image src={'/under-construction.jpg'} alt='under construction' 
        width={800}
        height={800}
        className="w-full h-full object cover"/>
       </div>
    );

} 