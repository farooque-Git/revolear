import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useState } from "react";
import Home from "./components/Home";
import Footer from "./pages/Footer";
import Aboutus from "./pages/Aboutus";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import MyPost from "./pages/MyPost";

import Contract from "./pages/Contract";
import Profile from "./pages/profile";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      {sidebarOpen && <Sidebar onClose={handleSidebarClose} />}{" "}
      {/* Pass the onClose prop */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Project />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<MyPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contracts" element={<Contract />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
