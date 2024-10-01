import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BookDetail from './pages/[book]';
import NotFound from './pages/404';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:book" element={<BookDetail />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Main;