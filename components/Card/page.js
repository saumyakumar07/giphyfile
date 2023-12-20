"use client";

import { AppContext } from "@/app/Context";
import Link from "next/link";
import { useContext, useState } from "react";


const card = () => {

  const { trending } = useContext(AppContext);

  const [gifs, setgifs] = trending;

  return (
    <>
      {gifs.length > 0 ? gifs.map((gif, idx) => {
        {
          console.log(gif.id)
        }

        return <div key={gif.id} className="relative group">
          <Link href={`/image/${gif.id}`}>  <video autoPlay loop muted src={gif.images.fixed_height.mp4} alt="" className="mb-5" /></Link>
          <div
            className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
          >
            <div className="flex justify-between ">
              <div className="font-normal">
                <p className="text-sm">{gif?.user?.name}</p>
                <p className="text-xs">{gif?.likes} likes</p>
              </div>
              <div className="flex items-center">
                {/* <Link href={gif?.links?.download} >Download</Link> */}
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

export default card