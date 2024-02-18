import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <BlogPage />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
