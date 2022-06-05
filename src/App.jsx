import { Routes, Route } from 'react-router-dom';
import Library from './components/Library';
import Search from './components/Search';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Library />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
