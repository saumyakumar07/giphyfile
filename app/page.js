"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import InfiniteScroll from "react-infinite-scroll-component";

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

import card from "@/components/Card/page";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {

  const [user] = useAuthState(auth);
  const router = useRouter()

  if (!user ){
    router.push('/signin')
  }

  const { trending } = useContext(AppContext);
  const [hasMore, setHasMore] = useState(true);


  const [globalData, setglobalData] = trending;


  async function getTrendingImages() {

    try {

      const data = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=yTbYS3FsMkCfiiofE4FTJAhf0zpELxYK&limit=25&offset=${globalData.length}&rating=g&bundle=messaging_non_clips`)



      data.data.data.length === 0 ? setHasMore(false) : "";

      setglobalData([...globalData, ...data.data.data])

    } catch (error) {

      toast.error(error.message, {
        autoClose: 3000,
      });
    }


  }



  useEffect(() => {
    if (globalData.length === 0) getTrendingImages();


  }, [])


  return (
    <>


      <h3 className="text-center font-mono text-xl">What's trending today</h3>

      {/* <!-- card  --> */}
      <InfiniteScroll
        dataLength={globalData.length}
        next={getTrendingImages}
        hasMore={hasMore}
        endMessage={
          <p >
            <h2 className="w-screen text-center text-xl">Yay! You have seen it all</h2>
          </p>
        }
      >
        <div className=" pt-5 flex flex-wrap gap-5 px-5  ">

          {card()}
        </div>
      </InfiniteScroll>



      <ToastContainer />


    </>
  );
};

export default page
