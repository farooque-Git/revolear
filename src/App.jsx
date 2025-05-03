import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useState } from "react";
import Home from "./components/Home";
import Footer from "./pages/Footer";
import Aboutus from "./pages/Aboutus";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false); // Close the sidebar
  };

  return (
    <Router>
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      {sidebarOpen && <Sidebar onClose={handleSidebarClose} />}{" "}
      {/* Pass the onClose prop */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        {/* <Route path="/features" element={<Feature />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
