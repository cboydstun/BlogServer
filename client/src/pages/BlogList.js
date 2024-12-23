import React, { useState } from 'react';
import { Pencil, Trash2, X, Check, Plus } from 'lucide-react';

// Reusable style classes
const sectionClasses = "w-full max-w-4xl bg-white/95 p-8 mb-12 rounded-lg shadow-lg transition-all duration-300 ease-in-out border-2 border-yellow-900 relative hover:shadow-2xl";
const gradientBorderClasses = "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900";
const headingClasses = "text-4xl font-serif font-bold text-center mb-8 text-yellow-950 relative";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedBlog, setEditedBlog] = useState({ title: '', content: '' });
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  const handleFetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:8080/blog/blogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const fetchedBlogs = await response.json();
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id); // Update to use _id for MongoDB
    setEditedBlog({ title: blog.title, content: blog.content });
  };

  const handleSave = async () => {
    if (editedBlog.title && editedBlog.content) {
      try {
        const response = await fetch(`http://localhost:8080/blog/blogs/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedBlog),
        });

        if (!response.ok) {
          throw new Error('Failed to update blog');
        }
        
        setBlogs(blogs.map(blog => 
          blog._id === editingId 
            ? { ...blog, title: editedBlog.title, content: editedBlog.content }
            : blog
        ));
        setEditingId(null);
      } catch (error) {
        console.error('Error updating blog:', error);
        alert('Failed to update blog post');
      }
    } else {
      alert('Title and content cannot be empty.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/blog/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog post');
    }
  };

  const handleAdd = async () => {
    if (newBlog.title && newBlog.content) {
      try {
        const response = await fetch('http://localhost:8080/blog/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBlog),
        });

        if (!response.ok) {
          throw new Error('Failed to create blog');
        }

        const createdBlog = await response.json();
        setBlogs([...blogs, createdBlog]);
        setNewBlog({ title: '', content: '' });
        setIsAddingNew(false);
      } catch (error) {
        console.error('Error creating blog:', error);
        alert('Failed to create blog post');
      }
    } else {
      alert('Title and content cannot be empty.');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6 transition-all duration-1000">
      <section className={sectionClasses}>
        <div className={gradientBorderClasses}></div>
        <div className="flex justify-between items-center mb-8">
          <h1 className={headingClasses}>Blog Posts</h1>
          <div className="flex gap-4">
            <button
              onClick={handleFetchBlogs}
              className="px-6 py-3 bg-yellow-950 text-white font-serif tracking-wide rounded-md hover:bg-yellow-800 transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
            >
              Show Blogs
            </button>
            {!isAddingNew && (
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center gap-2 px-6 py-3 bg-yellow-950 text-white font-serif tracking-wide rounded-md hover:bg-yellow-800 transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
              >
                <Plus size={16} /> Add New Post
              </button>
            )}
          </div>
        </div>

        {isAddingNew && (
          <div className="w-full bg-white/95 p-6 rounded-lg shadow-lg border-2 border-yellow-900 mb-8 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <input
              type="text"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              placeholder="Enter title"
              className="w-full mb-4 p-3 border-2 border-yellow-900/20 rounded-md font-serif text-lg focus:border-yellow-900 focus:ring-2 focus:ring-yellow-900/20 transition-all duration-300"
            />
            <textarea
              value={newBlog.content}
              onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
              placeholder="Enter content"
              className="w-full mb-4 p-3 border-2 border-yellow-900/20 rounded-md font-serif text-lg focus:border-yellow-900 focus:ring-2 focus:ring-yellow-900/20 transition-all duration-300"
              rows="4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsAddingNew(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white font-serif tracking-wide rounded-md hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <X size={16} /> Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-950 text-white font-serif tracking-wide rounded-md hover:bg-yellow-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Check size={16} /> Save
              </button>
            </div>
          </div>
        )}

        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="w-full bg-white/95 p-6 rounded-lg shadow-lg border-2 border-yellow-900 mb-6 relative group transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          {editingId === blog._id ? (
            <>
              <input
                type="text"
                value={editedBlog.title}
                onChange={(e) => setEditedBlog({ ...editedBlog, title: e.target.value })}
                className="w-full mb-4 p-3 border-2 border-yellow-900/20 rounded-md font-serif text-xl font-semibold focus:border-yellow-900 focus:ring-2 focus:ring-yellow-900/20 transition-all duration-300"
              />
              <textarea
                value={editedBlog.content}
                onChange={(e) => setEditedBlog({ ...editedBlog, content: e.target.value })}
                className="w-full mb-4 p-3 border-2 border-yellow-900/20 rounded-md font-serif text-lg focus:border-yellow-900 focus:ring-2 focus:ring-yellow-900/20 transition-all duration-300"
                rows="4"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setEditingId(null)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white font-serif tracking-wide rounded-md hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <X size={16} /> Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-950 text-white font-serif tracking-wide rounded-md hover:bg-yellow-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Check size={16} /> Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-serif font-bold text-yellow-950">{blog.title}</h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-yellow-950 hover:text-yellow-800 transition-all duration-300 transform hover:scale-110"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-yellow-950 hover:text-yellow-800 transition-all duration-300 transform hover:scale-110"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-800 font-serif text-lg leading-relaxed">{blog.content}</p>
            </>
          )}
          </div>
        ))}
      </section>
    </div>
  );
};
export default BlogList;
