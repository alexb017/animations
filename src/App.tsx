import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import Simple from './components/Simple';
import LayoutWithCards from './components/LayoutWithCards';
import LayoutTransform from './components/LayoutTransform';
import MenuTransition from './components/MenuTransition';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/layout-with-cards" element={<LayoutWithCards />} />
          <Route path="/layout-transform" element={<LayoutTransform />} />
          <Route path="/menu-transition" element={<MenuTransition />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
