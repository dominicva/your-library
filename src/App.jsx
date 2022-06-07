import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchBooks from './components/SearchBooks';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </>
  );
};

export default App;
