import Footer from "./components/footer";
import Header from "./components/header"
import { Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/Nopage";
import Vision from "./pages/vision";
import Insights from "./pages/insights";
import Contact from "./pages/Contact";
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
