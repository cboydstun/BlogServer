require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

dbConnect();

// import router
const storyReviewRoute = require("./routers/StoryReview");
const profile = require("./routers/Profile");

// Import routers
const storyRoute = require("./routers/storyRoute");
const newsletterRoutes = require("./routers/newsletterRoute");
const blogRoutes = require("./routers/blogRoutes");
const commentRoutes = require("./routers/commentRoutes");
const blogPageRoutes = require("./routers/blogpageRoutes");
const eventRoutes = require("./routers/EventCreation");

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static("client/build"));

// use routes
app.use("/profile", profile);
app.use("/blog", blogRoutes);
app.use("/blogpages", blogPageRoutes);
app.use("/comments", commentRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/stories", storyRoute);
app.use("/events", eventRoutes);
app.use("/storyReview", storyReviewRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
