import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import Simple from './components/Simple';
import Transforms from './components/Transforms';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/transforms" element={<Transforms />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
