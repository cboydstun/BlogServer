#!/usr/bin/env node
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Import models
const Author = require("./Models/Author");
const BlogPage = require("./Models/BlogPage");
const BlogPost = require("./Models/blog");
const Comment = require("./Models/Comment");
const Event = require("./Models/Event");
const StoryReview = require("./Models/StoryReview");
const Story = require("./Models/story");

const DB_URL = process.env.DB_URL;
const SALT = Number(process.env.SALT) || 10;

// Sample admin user
const adminUser = {
    name: "Admin User",
    email: "admin@example.com",
    password: "adminPassword123", // Will be hashed before saving
    bio: "Site administrator and main content creator",
    socialMedia: {
        twitter: "@admin",
        facebook: "admin.page",
        instagram: "@admin.blog"
    }
};

// Sample blog posts (reusing existing data)
const blogPosts = [
    {
        title: "Getting Started with Node.js",
        content: "Node.js is a powerful runtime that lets you build fast, scalable network applications. In this post, we'll explore the basics of Node.js and how to create your first server.",
        author: "Admin User",
        tags: ["nodejs", "javascript", "backend"]
    },
    {
        title: "Understanding MongoDB",
        content: "MongoDB is a popular NoSQL database that offers flexibility and scalability. Learn how to set up MongoDB and perform basic CRUD operations in this comprehensive guide.",
        author: "Admin User",
        tags: ["mongodb", "database", "backend"]
    }
];

// Sample blog pages
const blogPages = [
    {
        pageTitle: "Tech Blog",
        author: "Admin User",
        description: "Exploring modern web development technologies",
        bannerImage: "https://example.com/tech-banner.jpg"
    }
];

// Sample comments
const createComments = (blogId) => [
    {
        author: "John Reader",
        body: "Great article! Very informative.",
        blogId,
        approved: true
    },
    {
        author: "Jane Developer",
        body: "Thanks for explaining this so clearly. Looking forward to more content!",
        blogId,
        approved: true
    }
];

// Sample stories
const stories = [
    {
        title: "The Digital Revolution",
        description: "A short story about technology's impact on society",
        content: "In the year 2030, everything changed when...",
        author: "Admin User"
    }
];

// Sample story reviews
const createReviews = (storyId) => [
    {
        author: "Book Lover",
        rating: 5,
        body: "Absolutely captivating story!",
        storyId,
        approved: true
    },
    {
        author: "Critical Reader",
        rating: 4,
        body: "Well-written with interesting perspectives.",
        storyId,
        approved: true
    }
];

// Sample events
const events = [
    {
        Date: new Date("2024-12-25"),
        Location: "Virtual Event",
        Description: "Annual Writers' Workshop - Join us for a day of creative writing tips and networking!"
    },
    {
        Date: new Date("2024-11-15"),
        Location: "Tech Hub, Downtown",
        Description: "Tech Meetup - Discussing latest trends in web development"
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");

        // Clear existing data
        await Promise.all([
            Author.deleteMany({}),
            BlogPost.deleteMany({}),
            BlogPage.deleteMany({}),
            Comment.deleteMany({}),
            Story.deleteMany({}),
            StoryReview.deleteMany({}),
            Event.deleteMany({})
        ]);
        console.log("Cleared existing data");

        // Create admin user
        const hashedPassword = await bcrypt.hash(adminUser.password, SALT);
        const admin = await Author.create({
            ...adminUser,
            password: hashedPassword
        });
        console.log("Created admin user:", admin.email);

        // Create blog posts
        const createdPosts = await BlogPost.insertMany(blogPosts);
        console.log(`Created ${createdPosts.length} blog posts`);

        // Create blog pages with associated posts
        const createdPages = await Promise.all(blogPages.map(async (page) => {
            const blogPage = new BlogPage({
                ...page,
                posts: createdPosts.map(post => post._id)
            });
            return blogPage.save();
        }));
        console.log(`Created ${createdPages.length} blog pages`);

        // Create comments for each blog post
        for (const post of createdPosts) {
            const comments = createComments(post._id);
            await Comment.insertMany(comments);
        }
        console.log("Created comments for blog posts");

        // Create stories
        const createdStories = await Story.insertMany(stories);
        console.log(`Created ${createdStories.length} stories`);

        // Create reviews for each story
        for (const story of createdStories) {
            const reviews = createReviews(story._id);
            await StoryReview.insertMany(reviews);
        }
        console.log("Created reviews for stories");

        // Create events
        await Event.insertMany(events);
        console.log(`Created ${events.length} events`);

        console.log("\nDatabase seeding completed successfully!");

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await mongoose.connection.close();
        console.log("Database connection closed");
    }
}

seedDatabase();
