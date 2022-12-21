import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cooking recipe app</h1>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/recipes/:id" element={<Recipe />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
