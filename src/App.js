import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
