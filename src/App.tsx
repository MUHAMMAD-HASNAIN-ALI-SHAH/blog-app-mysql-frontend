import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Home/Navbar";
import useAuthStore from "./store/auth";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import CategoriesBlogs from "./pages/CategoriesBlogs";

function App() {
  const { verify, isAuthenticated } = useAuthStore();

  useEffect(() => {
    const verifyAuth = async () => {
      verify();
    };
    verifyAuth();
  }, [verify]);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/:category" element={<CategoriesBlogs />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
