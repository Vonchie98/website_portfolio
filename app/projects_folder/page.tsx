import Image from "next/image";

export default function under_construction(){
    return (
        <div>
        <h1 className="flex items-center justify-center absolute inset-0 text-4xl font-extrabold text-white animate-pulse">
            Sorry this part isn't done yet
        </h1>
        
        <Image src={'/under_construction.jpg'} alt='under construction' 
        width={1600}
        height={3200}
        className="w-full h-full object cover"/>
       </div>
    );

}