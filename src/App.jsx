import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./pages/Footer";
import Home from "./components/Home";
import Aboutus from "./pages/Aboutus";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import MyPost from "./pages/MyPost";
import Contract from "./pages/Contract";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function LayoutWrapper() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define routes where Navbar & Footer should be hidden
  const hiddenLayoutRoutes = ["/login", "/register"];

  const hideLayout = hiddenLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && (
        <>
          <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
        </>
      )}

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
