// Updated WebDesignTipsPage.js with white background theme
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/tailwind.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const data = { /* same dummy data as before */ };

const BlogPage = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setContent(data);
      setLoading(false);
    }, 1000);
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
  <section className="bg-white blogpy px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-left mb-12">Blog</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-6 rounded-2xl shadow-md">
        <img
          src="/images/hero-placeholder.png"
          alt="Hero"
          className="w-full h-64 md:h-auto object-cover rounded-xl"
        />
        <div>
          <span className="text-xs uppercase bg-gray-200 px-2 py-1 rounded-full text-gray-800 inline-block mb-3">
            Company
          </span>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Why the age of CMS is over and why we raised $85M Series C
          </h2>
          <p className="text-gray-700 mb-4">
            CMSes are broken. We're launching the Content Operating System and raising $85M to build what content should have been all along: core to your business.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="/images/avatar-placeholder.jpg" alt="Author" className="w-8 h-8 rounded-full" />
            <span>Magnus Hillestad</span>
            <span className="ml-auto text-xs text-gray-500">May 8</span>
          </div>
        </div>
      </div>
    </div>
  </section>

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
      {[1, 2, 3].map((index) => (
        <article key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
          <span className="text-xs uppercase bg-gray-200 text-gray-800 px-2 py-1 rounded-full inline-block mb-3">
            Product
          </span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Dashboard and Insights: Your New Content HQ
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            A new way to work in Sanity: smarter, more aligned, and all in one place.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <img src="/images/avatar-placeholder.jpg" alt="Author" className="w-8 h-8 rounded-full" />
            <span>Ken Jones</span>
            <span className="ml-auto text-xs text-gray-400">May 29</span>
          </div>
        </article>
      ))}
    </div>
  </section>

  <Footer />
</main>

    </>
  );
};

export default BlogPage;