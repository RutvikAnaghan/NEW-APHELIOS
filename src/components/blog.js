import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogService";
import { FiCalendar, FiClock } from "../assets/icons/vander";

export default function Blogs(){
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await blogService.getBlogs();
                setBlogs(data);
            } catch (error) {
                setError("There was an error fetching the blog posts.");
                console.error("Error fetching blog posts:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="relative md:py-24 py-16" id="blog">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Blog or News</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {blogs.map((item) => (
                        <div className="group relative overflow-hidden" key={item._id}>
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800 photo-size">
                                <img src={`http://localhost:3000/${item.imageUrl}`} className="group-hover:scale-110 duration-500" alt={item.title} />
                            </div>

                            <div className="mt-6">
                                <div className="flex mb-4">
                                    <span className="flex items-center text-slate-400 text-sm">
                                        <FiCalendar className="size-4 text-slate-900 dark:text-white me-1.5" />
                                        {new Date(item.publishedAt).toLocaleDateString()}
                                    </span>
                                    <span className="flex items-center text-slate-400 text-sm ms-3">
                                        <FiClock className="size-4 text-slate-900 dark:text-white me-1.5" />
                                        5 min read
                                    </span>
                                </div>

                                <Link to="" className="title text-lg font-semibold hover:text-teal-500 duration-500 ease-in-out">
                                    {item.title}
                                </Link>
                                <p className="text-slate-400 mt-2">{item.content.substring(0, 100)}...</p>

                                <div className="mt-3">
                                     <Link to={`/blog/${item._id}`} className="text-teal-500">
                                        Read More <i className="mdi mdi-chevron-right align-middle"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};