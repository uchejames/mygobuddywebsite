import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buddy from "./components/BuddyCard";

import Home from "./pages/Home";
import About from "./pages/About";
import Buddies from "./pages/Buddies";
import BuddyDetail from "./pages/BuddyDetail";
// import other pages as needed


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow px-4 sm:px-6 md:px-10 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/buddies" element={<Buddies />} />
            <Route path="/buddies/:id" element={<BuddyDetail />} />
            {/* Add more pages like: */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

        {/* Persistent Buddy Assistant */}
        <Buddy />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
