"use client";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config'
import {useAuthState} from 'react-firebase-hooks/auth'


const navbar = (params) => {

    const router = useRouter();
    const [user] = useAuthState(auth);



    const [slug, setslug] = useState('')

    async function searchHandler(e) {
        try {
            e.preventDefault();

            setslug("")
            params.length = 0;
            router.push(`/search/${slug}`);

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <div className="nav flex items-center justify-between  ">


                {/* <!-- Search Container --> */}
                <div
                    className="flex flex-col px-10 py-5 justify-between space-y-5 md:flex-row md:space-y-0"
                >
                    {/* <!-- Upload Button --> */}
                    <Link href={'/'}
                        className="py-3 px-14 text-lg font-normal text-white"
                    >
                        <Image src={logo}
                            width={80}
                            height={100}
                            alt="logo" />
                    </Link>

                </div>

                <div className="flex
                 items-center gap-5">

                    {/* <!-- Input and SVG Container --> */}
                    { user &&
                    <form onSubmit={searchHandler} >

                        <div className="flex justify-between border overflow-hidden border-black rounded-md ">
                            <input
                                type="text" value={slug} onChange={(e) => setslug(e.target.value)}
                                className=" border w-screen p-2 md:w-80 rounded-md placeholder:font-thin focus:outline-none"
                                placeholder="Search your imagination..."
                            />

                            <button className="text-white bg-black px-2 " type='submit'>Search</button>


                        </div>
                    </form>

                    
                }

                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={() => {
                        signOut(auth)
                    }}>{ user ? "LogOut" : "LogIn" }</button>

                </div>





            </div>

        </>
    )
}

export default navbar