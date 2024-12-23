# BlogServer

A Node.js/Express backend server for managing blog content, stories, events, and user interactions.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, bcrypt
- **Email Service**: Nodemailer
- **Development**: Nodemon

## Project Structure

```
BlogServer/
├── app.js                 # Application entry point
├── db.js                  # Database configuration
├── middlewares/
│   └── tokenValidation.js # JWT validation middleware
├── Models/
│   ├── Author.js         # Author schema
│   ├── Blog.js           # Blog post schema
│   ├── BlogPage.js       # Blog page schema
│   ├── Comment.js        # Comment schema
│   ├── Event.js          # Event schema
│   ├── Newsletter.js     # Newsletter schema
│   ├── Song.js           # Song schema
│   ├── Story.js          # Story schema
│   └── StoryReview.js    # Story review schema
├── routers/
│   ├── aboutRoutes.js    # About page routes
│   ├── blogpageRoutes.js # Blog page routes
│   ├── blogRoutes.js     # Blog post routes
│   ├── commentRoutes.js  # Comment routes
│   ├── EventCreation.js  # Event routes
│   ├── newsletterRoute.js# Newsletter routes
│   ├── Profile.js        # Author profile routes
│   ├── StoryReview.js    # Story review routes
│   └── storyRoute.js     # Story routes
└── scripts/
    └── AccountCreationScript.js # Account setup utility
```

## Features

- **Authentication & Authorization**

  - Author account creation and management
  - JWT-based authentication
  - Password reset functionality

- **Content Management**

  - Blog post creation and management
  - Short story publishing
  - Event creation and management
  - Song/music integration for stories

- **User Interaction**
  - Comment system for blogs and stories
  - Story review system
  - Newsletter subscription
  - Event registration

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables in `.env`:

   - MongoDB connection string
   - JWT secret
   - Email service credentials
   - Other configuration variables

3. Start the development server:
   ```bash
   npm start
   ```
   This will launch the server using nodemon for automatic reloading.

## API Routes

- `/api/blog` - Blog post management
- `/api/story` - Story management
- `/api/events` - Event management
- `/api/profile` - Author profile management
- `/api/comments` - Comment management
- `/api/reviews` - Story review management
- `/api/newsletter` - Newsletter subscription

## Development

The project uses nodemon for development, which automatically restarts the server when file changes are detected.

## License

ISC

## Contributors

- Lucy
- Unique
- Ricardo
- Sam
