import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bookstore from './pages/home';
import BookDetail from './pages/[book]';
import NotFound from './pages/404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Bookstore />} />
      <Route path="/:book" element={<BookDetail />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

function Routee() {
  return (
    <Router>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#7e00f339] bg-[radial-gradient(#ffffff33_1px,#E9E5DC_1px)] bg-[size:20px_20px]" />
      <AppRoutes />
    </Router>
  );
}

export default Routee;
