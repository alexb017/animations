import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import Simple from './components/Simple';
import LayoutWithCards from './components/LayoutWithCards';
import TransformLayout from './components/TransformLayout';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/layout-with-cards" element={<LayoutWithCards />} />
          <Route path="/transform-layout" element={<TransformLayout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
