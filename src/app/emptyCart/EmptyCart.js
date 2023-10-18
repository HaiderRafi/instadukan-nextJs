import Link from 'next/link'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full">
    <div>
      <img
        className="w-[500px]"
        src="https://static.vecteezy.com/system/resources/previews/006/019/494/original/cruise-ship-doodle-ocean-liner-sketch-hand-drawing-illustration-vector.jpg"
        alt="img"
      />
    </div>
    <h1 className=" pt-2 text-4xl font-semibold">Your cart is empty</h1>
    <h1 className="pt-2 text-lg">
      You can go to home page to view Ferry options
    </h1>
    <Link href={"/"}><button className="p-3 m-3 rounded-lg bg-orange-500 hover:shadow-xl hover:bg-orange-400 text-white">
      BOOK FERRY NOW!!!
    </button></Link>
    
  </div>
  )
}

export default EmptyCart