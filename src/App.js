import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
