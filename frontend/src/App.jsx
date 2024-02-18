import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <React.Fragment>
    //   <Navbar />
    //
    //     <HomePage />
    //
    //   <Footer />
    // </React.Fragment>
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
