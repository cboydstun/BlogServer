import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Layout
import AppLayout from "./appLayout/AppLayout";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogList from "./pages/BlogList";
import Profile from "./pages/Profile";
import StoryPage from "./pages/storypage.js";
import EventsPage from "./pages/Events.js";
import AdminReviewComment from './pages/AdminReviewComment';

// Components
import Login from "./components/Login";
import StoryCreation from "./components/StoryCreation.js";
import StoryList from "./components/StoryList.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      {/* Public Routes */}
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<Login />} />
      <Route path="blogPage" element={<BlogPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="storyPage" element={<StoryPage />} />

      {/* Protected Routes */}
      <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="blogList" element={<ProtectedRoute><BlogList /></ProtectedRoute>} />
      <Route path="blogCreation" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="storylist" element={<ProtectedRoute><StoryList /></ProtectedRoute>} />
      <Route path="storycreation" element={<ProtectedRoute><StoryCreation /></ProtectedRoute>} />
      <Route path="adminReviewComment" element={<ProtectedRoute><AdminReviewComment /></ProtectedRoute>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
