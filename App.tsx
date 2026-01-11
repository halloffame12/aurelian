
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Lookbook from './pages/Lookbook';
import Store from './pages/Store';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Immediate scroll to top on path change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/collections" element={<PageWrapper><Collections /></PageWrapper>} />
            <Route path="/lookbook" element={<PageWrapper><Lookbook /></PageWrapper>} />
            <Route path="/store" element={<PageWrapper><Store /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
};

export default App;
