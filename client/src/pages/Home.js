import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import clientImage from "../assets/MikeN.png";
// import NewsletterForm from "../components/Newsletter";
import "../pages/Home";

// Reusable style classes
const sectionClasses =
  "w-full max-w-4xl bg-white/95 p-8 mb-12 rounded-lg shadow-lg transition-all duration-300 ease-in-out border-2 border-yellow-900 relative hover:shadow-2xl";
const gradientBorderClasses =
  "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900";
const headingClasses =
  "text-4xl font-serif font-bold text-center mb-8 text-yellow-950 relative";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const book = {
    title: "God, Country, Family: Three Short Stories",
    description:
      "Three Stories pulling you in with questions of belief, War, Tears and Laughter...",
    coverImageUrl:
      "https://m.media-amazon.com/images/I/714MiqrkPhL._SL1500_.jpg",
    amazonLink: "https://a.co/d/8bZOQID",
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/blog/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const blogsData = await response.json();
      const sortedBlogs = blogsData.sort(
        (a, b) => new Date(b.created) - new Date(a.created)
      );
      setBlogs(sortedBlogs.slice(0, 2));
    } catch (error) {
      setError("Failed to fetch blogs");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Mike Ninness - Author, Storyteller, and Air Force Veteran</title>
        <meta name="description" content="Explore Mike Ninness's collection of stories, including 'God, Country, Family'. Discover blog posts from a retired Air Force veteran and accomplished storyteller." />
        <meta name="keywords" content="Mike Ninness, author, storyteller, Air Force veteran, God Country Family, short stories, blog" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mike Ninness - Author, Storyteller, and Air Force Veteran" />
        <meta property="og:description" content="Explore Mike Ninness's collection of stories, including 'God, Country, Family'. Discover blog posts from a retired Air Force veteran and accomplished storyteller." />
        <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mike Ninness - Author, Storyteller, and Air Force Veteran" />
        <meta name="twitter:description" content="Explore Mike Ninness's collection of stories, including 'God, Country, Family'. Discover blog posts from a retired Air Force veteran and accomplished storyteller." />
        <meta name="twitter:image" content="%PUBLIC_URL%/og-image.png" />

        <link rel="canonical" href="https://yourdomain.com" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://yourdomain.com",
            "name": "Mike Ninness - Author & Storyteller",
            "description": "Explore Mike Ninness's collection of stories, including 'God, Country, Family'. Discover blog posts from a retired Air Force veteran and accomplished storyteller.",
            "author": {
              "@type": "Person",
              "name": "Mike Ninness",
              "description": "Retired Air Force veteran, author, and founder of Washington Wordsmiths",
              "sameAs": [
                "https://yourdomain.com/about"
              ]
            },
            "mainEntity": {
              "@type": "Book",
              "name": "God, Country, Family: Three Short Stories",
              "author": {
                "@type": "Person",
                "name": "Mike Ninness"
              },
              "url": "https://a.co/d/8bZOQID",
              "description": "Three Stories pulling you in with questions of belief, War, Tears and Laughter..."
            }
          })}
        </script>
      </Helmet>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6 transition-all duration-1000">
      {/* Book Section */}
      <section className={sectionClasses}>
        <div className={gradientBorderClasses}></div>
        <h1 className="text-5xl font-serif font-bold text-center mb-8 text-yellow-950 relative">
          <span className="absolute -left-4 -top-1 text-6xl text-orange-300 opacity-20">
            ❝
          </span>
          {book.title}
          <span className="absolute -right-4 -bottom-1 text-6xl text-orange-300 opacity-20">
            ❞
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <img
            src={book.coverImageUrl}
            alt={book.title}
            className="w-48 h-72 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
          />
          <p className="text-xl text-gray-700 max-w-xl italic leading-relaxed">
            {book.description}
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-yellow-950 text-white text-xl font-serif tracking-wide rounded-md hover:bg-yellow-800 transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Buy on Amazon</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-800 to-yellow-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className={`${sectionClasses} bg-orange-300/90`}>
        <div className={gradientBorderClasses}></div>
        <div className="flex flex-col items-center">
          <div className="relative mb-6 group">
            <div className="absolute inset-0 border-4 border-yellow-900 rounded-full transform rotate-6 group-hover:rotate-0 transition-all duration-500"></div>
            <img
              src={clientImage}
              alt="Mike Ninness"
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-lg object-cover transform group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 text-yellow-950">
            About Mike Ninness
          </h2>
          <p className="text-xl font-serif text-yellow-950 mb-6 max-w-2xl text-center leading-relaxed">
            Mike, a retired Air Force vet, storyteller, and writer, has been
            published by Maryville University and helped found the Washington
            Wordsmiths. Discover his journey—click to learn more!
          </p>
          <Link
            to="/about"
            className="text-yellow-950 hover:text-yellow-800 font-serif text-xl transition-all duration-200 border-b-2 border-transparent hover:border-yellow-800 hover:scale-105 transform"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className={sectionClasses}>
        <div className={gradientBorderClasses}></div>
        <h3 className={headingClasses}>
          <span className="absolute -left-6 top-0 text-6xl text-orange-300 opacity-20">
            ✎
          </span>
          Latest Blog Posts
        </h3>
        <div className="space-y-8">
          {error && (
            <p className="text-red-500 text-center font-serif">{error}</p>
          )}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/95 p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out border-2 border-yellow-900 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h4 className="text-2xl font-serif font-bold text-center mb-4 text-yellow-950">
                {blog.title}
              </h4>
              <p className="text-yellow-900 text-sm text-center mb-4 font-serif">
                By {blog.author} | {new Date(blog.created).toLocaleDateString()}
              </p>
              <p className="text-lg text-gray-800 font-serif leading-relaxed">
                {blog.content.slice(0, 150)}...
              </p>
              <Link
                to="/blogPage"
                className="text-yellow-950 hover:text-yellow-800 mt-6 block text-center font-serif text-lg transition-all duration-200 border-b-2 border-transparent hover:border-yellow-800 group-hover:scale-105 transform"
              >
                Read More
              </Link>
            </div>
          ))}
          {/* More Blogs */}
          <div className="flex justify-center">
            <Link
              to="/blogPage"
              className="text-yellow-950 hover:text-yellow-800 font-serif text-xl transition-all duration-200 border-b-2 border-transparent hover:border-yellow-800 hover:scale-105 transform"
            >
              More Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className={`${sectionClasses} bg-white/95 flex justify-center`}>
        <div className={gradientBorderClasses}></div>
        <NewsletterForm />
      </section> */}
    </div>
    </>
  );
};

export default HomePage;
