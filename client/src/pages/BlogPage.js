import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CommentSection from '../components/CommentsSection';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Fetch blog data
  const fetchBlogs = async () => {
    try {
      const response = await fetch('/blog/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const blogsData = await response.json();
      const sortedBlogs = blogsData.sort((a, b) => new Date(b.created) - new Date(a.created));
      setBlogs(sortedBlogs);
    } catch (error) {
      setError('Failed to fetch blogs');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle selecting a blog
  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  // Close the full view of the selected blog
  const closeFullView = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedBlog(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <Helmet>
        {selectedBlog ? (
          // Dynamic meta tags when a blog is selected
          <>
            <title>{`${selectedBlog.title} - Mike Ninnes Blog`}</title>
            <meta name="description" content={selectedBlog.content.slice(0, 155) + '...'} />
            <meta name="keywords" content={`Mike Ninnes, blog, ${selectedBlog.title}, storytelling, writing`} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${selectedBlog.title} - Mike Ninnes Blog`} />
            <meta property="og:description" content={selectedBlog.content.slice(0, 155) + '...'} />
            <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${selectedBlog.title} - Mike Ninnes Blog`} />
            <meta name="twitter:description" content={selectedBlog.content.slice(0, 155) + '...'} />
            <meta name="twitter:image" content="%PUBLIC_URL%/og-image.png" />

            <link rel="canonical" href={`https://yourdomain.com/blog/${selectedBlog._id}`} />

            {/* JSON-LD structured data for individual blog post */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": selectedBlog.title,
                "description": selectedBlog.content.slice(0, 155) + '...',
                "author": {
                  "@type": "Person",
                  "name": selectedBlog.author
                },
                "datePublished": selectedBlog.created,
                "dateModified": selectedBlog.created,
                "publisher": {
                  "@type": "Organization",
                  "name": "Mike Ninnes Blog",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://yourdomain.com/og-image.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://yourdomain.com/blog/${selectedBlog._id}`
                },
                "image": {
                  "@type": "ImageObject",
                  "url": "https://yourdomain.com/og-image.png"
                }
              })}
            </script>
          </>
        ) : (
          // Default meta tags for blog listing page
          <>
            <title>Blog Posts - Mike Ninnes</title>
            <meta name="description" content="Read the latest blog posts from Mike Ninnes. Stories, thoughts, and insights from a veteran writer and storyteller." />
            <meta name="keywords" content="Mike Ninnes blog, veteran writer blog, storytelling, Washington Wordsmiths" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Blog Posts - Mike Ninnes" />
            <meta property="og:description" content="Read the latest blog posts from Mike Ninnes. Stories, thoughts, and insights from a veteran writer and storyteller." />
            <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blog Posts - Mike Ninnes" />
            <meta name="twitter:description" content="Read the latest blog posts from Mike Ninnes. Stories, thoughts, and insights from a veteran writer and storyteller." />
            <meta name="twitter:image" content="%PUBLIC_URL%/og-image.png" />

            <link rel="canonical" href="https://yourdomain.com/blog" />

            {/* JSON-LD structured data for blog listing */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Blog",
                "name": "Mike Ninnes Blog",
                "description": "Read the latest blog posts from Mike Ninnes. Stories, thoughts, and insights from a veteran writer and storyteller.",
                "url": "https://yourdomain.com/blog",
                "author": {
                  "@type": "Person",
                  "name": "Mike Ninnes"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Mike Ninnes Blog",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://yourdomain.com/og-image.png"
                  }
                }
              })}
            </script>
          </>
        )}
      </Helmet>
      <div className="min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 flex flex-col justify-center items-center pt-12 pb-12">
        <h1 className="text-3xl font-serif font-bold text-center mb-5">Welcome to the Blog Page</h1>
        <div className="w-full max-w-6xl px-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Show the selected blog and comments */}
          {selectedBlog ? (
            <div
              className={`fixed top-0 left-0 w-full h-full bg-orange-50 z-50 flex flex-col justify-start items-center p-8 overflow-auto shadow-2xl rounded-lg transition-all duration-500 ease-in-out transform scale-100 ${
                isClosing ? 'scale-90 opacity-0' : ''
              }`}
            >
              <button
                onClick={closeFullView}
                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-md"
              >
                Close
              </button>
              <h2 className="text-4xl font-bold text-yellow-950 mb-4">{selectedBlog.title}</h2>
              <div className="w-full border-t-4 border-orange-950 mb-6"></div>
              <p className="text-lg text-gray-500 mb-6">By: {selectedBlog.author} | {new Date(selectedBlog.created).toLocaleDateString()}</p>
              <div className="prose prose-xl max-w-3xl text-gray-800 mb-6">
                <p>{selectedBlog.content}</p>
              </div>

              {/* Pass selected blog ID to CommentSection */}
              <CommentSection blogId={selectedBlog._id} />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-8">
              <h1 className="text-3xl font-bold text-center mb-5">Blogs</h1>

              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 max-w-sm flex flex-col justify-between h-full relative border border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">
                    By: {blog.author} | {new Date(blog.created).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-4">{blog.content.slice(0, 100)}...</p>
                  <button
                    onClick={() => handleReadMore(blog)}
                    className="text-teal-500 hover:text-teal-700 mt-2 transition-colors duration-300"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
