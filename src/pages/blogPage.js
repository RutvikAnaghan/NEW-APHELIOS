// Updated WebDesignTipsPage.js with white background theme
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/tailwind.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";


const BlogPage = () => {
  const [content, setContent] = useState({ title: "", blogs: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setContent({ title: "Blog", blogs: data });
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  

 
  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  return (
    <>
<main className="bg-white">
  <Helmet>
    <meta charSet="utf-8" />
    <title>{content.title}</title>
    <meta name="keywords" content="web design, conversions, user-friendly, mobile-optimized, tips" />
    <meta name="author" content="John Doe" />
  </Helmet>

  <Navbar />

  {/* Hero Section */}
  
  {content.blogs && content.blogs.length > 0 && (

  <section className="bg-white blogpy px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-left mb-12">Blog</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-6 rounded-2xl shadow-md">
        <img
          src={content.blogs[0].imageUrl || "/images/hero-placeholder.png"}
          alt="Blog Image"
          className="w-full h-64 md:h-auto object-cover rounded-xl"
        />
        <div>
          <span className="text-xs uppercase bg-gray-200 px-2 py-1 rounded-full text-gray-800 inline-block mb-3">
            {content.blogs[0].category || "Category"}
          </span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            {content.blogs[0].title}
          </h2>
          <p className="text-gray-700 mb-4">
            {content.blogs[0].description}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img
              src={content.blogs[0].authorImage || "/images/avatar-placeholder.jpg"}
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <span>{content.blogs[0].author}</span>
            <span className="ml-auto text-xs text-gray-500">{content.blogs[0].date}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)}


  {/* Filter Buttons */}
  <section className="bg-gray-50 px-4 md:px-8">
    <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-3 justify-center pt-8">
      {['All posts', 'Product', 'Community', 'Guides', 'Company', 'Content strategy', 'Digital strategy'].map((cat, i) => (
        <button
          key={i}
          className="text-sm text-gray-800 border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-all"
        >
          {cat}
        </button>
      ))}
    </div>
  </section>

  {/* Article Grid */}
  <section className="bg-gray-50 py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {content.blogs && content.blogs.length > 0 && content.blogs.map((blog, index) => (
//   <article key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
//     <span className="text-xs uppercase bg-gray-200 text-gray-800 px-2 py-1 rounded-full inline-block mb-3">
//       {blog.category || "Category"}
//     </span>
//     <h3 className="text-xl font-semibold text-gray-900 mb-2">
//       {blog.title}
//     </h3>
//     <p className="text-sm text-gray-600 mb-4">
//       {blog.description}
//     </p>
//     <div className="flex items-center gap-2 text-sm text-gray-700">
//       <img src={blog.authorImage || "/images/avatar-placeholder.jpg"} alt="Author" className="w-8 h-8 rounded-full" />
//       <span>{blog.author}</span>
//       <span className="ml-auto text-xs text-gray-400">{blog.date}</span>
//     </div>
//   </article>
<Link to={`/blog/${blog._id}`} key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow block">
  <span className="text-xs uppercase bg-gray-200 text-gray-800 px-2 py-1 rounded-full inline-block mb-3">
    {blog.category || "Category"}
  </span>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">
    {blog.title}
  </h3>
  <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
  <div className="flex items-center gap-2 text-sm text-gray-700">
    <img src={blog.authorImage || "/images/avatar-placeholder.jpg"} alt="Author" className="w-8 h-8 rounded-full" />
    <span>{blog.author}</span>
    <span className="ml-auto text-xs text-gray-400">{blog.date}</span>
  </div>
</Link>
))}

    </div>
  </section>

  <Footer />
</main>

    </>
  );
};

export default BlogPage;