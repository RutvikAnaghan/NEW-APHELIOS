import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BlogPosts = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-lg text-gray-500">Loading blog...</div>;
  if (!blog)
    return <div className="text-center py-20 text-lg text-red-600">Blog not found</div>;

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />

      <section className="max-w-4xl mx-auto blogpy px-6 sm:px-10">
        {/* Blog Image */}
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-xl mb-10 shadow-lg"
          />
        )}

        {/* Blog Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>

        {/* Blog Meta */}
        <div className="flex items-center mb-10 space-x-4 text-sm text-gray-600">
          {blog.authorImage && (
            <img src={blog.authorImage} className="w-10 h-10 rounded-full" alt={blog.author} />
          )}
          <span className="font-semibold">{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>

        {/* Blog Description */}
        <p className="text-lg text-gray-700 mb-8">{blog.description}</p>

        {/* Blog Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          {blog.content?.introduction && <p>{blog.content.introduction}</p>}

          {Array.isArray(blog.content?.steps) && (
            <div>
              <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">Steps</h2>
              <ol className="list-decimal list-inside space-y-2">
                {blog.content.steps.map((step, index) => (
                  <li key={index}>
                    <strong>{step.title}</strong>: {step.body}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {blog.content?.conclusion && (
            <p className="mt-8">
              <strong>Conclusion:</strong> {blog.content.conclusion}
            </p>
          )}

          {blog.content?.callToAction && (
            <p className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded">
              {blog.content.callToAction}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPosts;
