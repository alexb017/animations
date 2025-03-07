import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import Simple from './components/Simple';
import LayoutWithCards from './components/LayoutWithCards';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/layout-with-cards" element={<LayoutWithCards />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
