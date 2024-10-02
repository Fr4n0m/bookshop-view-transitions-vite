import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import App from './App';
import BookDetail from './pages/[book]';
import NotFound from './pages/404';

const MotionRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route
        path="/"
        element={
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <App />
          </motion.div>
        }
      />
      <Route
        path="/:book"
        element={
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <BookDetail />
          </motion.div>
        }
      />
      <Route
        path="/404"
        element={
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <NotFound />
          </motion.div>
        }
      />
    </Routes>
  );
};

function Routee() {
  return (
    <Router>
      <div
      className="fixed top-0 z-[-2] h-screen w-screen bg-[#7e00f339] bg-[radial-gradient(#ffffff33_1px,#E9E5DC_1px)] bg-[size:20px_20px]"
      >
      </div>
      <MotionRoutes />
    </Router>
  );
}

export default Routee;
