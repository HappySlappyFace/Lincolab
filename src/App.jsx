import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes Popper.js

import "./custom.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from "./pages/Test";
import SampleManagement from "./pages/SampleManagement";
import OutsourceRequest from "./pages/OutsourceRequest";

function MainContent() {
  const location = useLocation();

  // Determine if the sidebar should be shown based on the current route
  const showSidebar = [
    "/about",
    "/contact",
    "/test",
    "/sample-management",
    "/outsource-request",
  ].includes(location.pathname);

  return (
    <div className="d-flex">
      {showSidebar && <Sidebar labName={"Thameur"} />}
      <main className={`flex-grow-1 ${showSidebar ? "p-3" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sample-management" element={<SampleManagement />} />
          <Route path="/outsource-request" element={<OutsourceRequest />} />

          {/* Add more routes here */}
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <MainContent />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
