import { Outlet } from "react-router-dom";
import React from "react";
// Imports
import NavBar from "../pages/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

// This component serves as the main layout for the application, wrapping around other routes and providing a consistent UI
function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ScrollToTop Component to handle scrolling */}
      <ScrollToTop />

      {/*NavBar Component  */}
      <NavBar />

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
export default AppLayout;
