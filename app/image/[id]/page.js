"use client"
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
const Image = () => {
    const {id} = useParams();
    const [singleImage, setSingleImage] = useState({});
    const [loading, setLoading] = useState(true);

    async function getSingleImage() {
        try {
            const { data } = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=yTbYS3FsMkCfiiofE4FTJAhf0zpELxYK&rating=g`);

            
            setSingleImage(data);
            setLoading(false);
        } catch (error) {
            toast.error(error.message, {
                autoClose: 3000,
            });
        }
    }

    useEffect(() => {
        getSingleImage();
    }, [id]);

    console.log(singleImage.data);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4">
                <Link href="/" className="text-blue-500 p-5 hover:underline">← Back to Gallery</Link>
                {loading ? (
                    <p className="text-center mt-8">Loading...</p>
                ) : (
                    <>
                        <h1 className="text-center font-mono text-3xl mb-4">Image by {singleImage.user?.name}</h1>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="text-center">
                                <video autoPlay loop muted src={singleImage.data.images.fixed_height.mp4} alt={singleImage?.alt_description} className="mx-auto rounded-lg" />
                            </div>
                            <div className="mt-4 text-center capitalize">
                                <h2 className="text-2xl font-semibold">{singleImage?.alt_description}</h2>
                                <div className="mx-auto p-16">
                                    <p className="text-gray-600 text-left mt-2">Liked by: {singleImage?.likes}</p>
                                    <p className="text-gray-600 text-left mt-2">Author: {singleImage?.user?.name}</p>
                                    <p className="text-gray-600 text-left mt-2">Uploaded: {new Date(singleImage?.created_at).toLocaleDateString()}</p>
                                </div>

                            </div>
                        </div>
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Image;
