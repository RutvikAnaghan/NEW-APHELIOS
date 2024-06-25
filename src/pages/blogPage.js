
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogService from "../services/blogService";
import { Link } from "react-router-dom";

import NavLight from "../components/navLight";
import Footer from "../components/footer";

export default function BlogPage(){

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await blogService.getBlogById(id);
                setBlog(data);
            } catch (error) {
                setError("There was an error fetching the blog post.");
                console.error("Error fetching blog post:", error);
            }
        };

        fetchBlog();
    }, [id]);

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    if (!blog) {
        return <p className="text-center">Loading...</p>;
    }


    return(
        <>
        <NavLight/>
        <section className="relative items-center overflow-hidden bg-gradient-to-t to-teal-6002 via-teal-600/50 from-transparent" id="blog">
            <div className="container relative">
                <div className="grid grid-cols-1 md:mt-48 mt-5 text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">{blog.title}</h4>
                    <div className="flex items-center mb-4">
                        <span className="text-white/70 text-lg max-w-xl mx-auto">Posted On : {new Date(blog.publishedAt).toLocaleDateString()}</span>
                        <span className="text-white/70 text-lg max-w-xl mx-auto">Posted By : {blog.author}</span>
                    </div>

                    <div className="overflow-hidden mt-8 flex justify-content-center mb-10">
                        <img src={`http://localhost:3000/${blog.imageUrl}`} alt={blog.title} className="mb-4 rounded-md shadow" />
                    </div>
                    <div className="flex items-center mb-20">
                        <p className="text-slate-400">{blog.content}</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}