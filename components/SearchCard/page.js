"use client";

import { AppContext } from "@/app/Context";
import Link from "next/link";
import { useContext, useState } from "react";


const searchCard = () => {

  const { search } = useContext(AppContext);
  const [images, setimages] = search;


 

  return (
    <>
      {images.length > 0 ? images.map((image, idx) => {

        

return <div key={image.id} className="relative group">
  <Link href={`/image/${image.id}`}>  <video autoPlay loop muted src={image.images.fixed_height.mp4} alt="" className="mb-5" /></Link>
  <div
    className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
  >
    <div className="flex justify-between ">
      <div className="font-normal">
        <p className="text-sm">{image?.user?.name}</p>
        <p className="text-xs">{image?.likes} likes</p>
      </div>
      <div className="flex items-center">
        {/* <Link href={image.links.download} >Download</Link> */}
      </div>
    </div>
  </div>
</div>
}) : <div>
<div className="grid gap-8 py-8 ">
  <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
    </div>
    
    <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
    </div>
    <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
    </div>
    <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
    </div>
    <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
    </div>
    <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
    </div>
    <div class="animate-pulse space-y-2 ">
    <div class="bg-gray-200  h-72 "></div>
  </div>
</div>
</div>}

    </>
  )
}

export default searchCard