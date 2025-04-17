import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx"
import { Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import NotFound from "./pages/Nopage.jsx";
import Vision from "./pages/vision.jsx";
import Insights from "./pages/Insights.jsx";
import Contact from "./pages/Contact.jsx";
import { AnimatePresence } from 'framer-motion';
import { useEffect } from "react";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
   <Header />
   <AnimatePresence mode="wait">
   <Routes  location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </AnimatePresence>
    <Footer />
    </>
  )
}

export default App
