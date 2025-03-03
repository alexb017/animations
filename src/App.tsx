import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import Simple from './components/Simple';
import Transforms from './components/Transforms';
import Springs from './components/Springs';
import ExitAnimation from './components/ExitAnimation';
import SharedLayoutAnimation from './components/Layout';
import SharedLayoutWithTextAnimation from './components/LayoutWithText';
import LayoutWithCards from './components/LayoutWithCards';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/transforms" element={<Transforms />} />
          <Route path="/springs" element={<Springs />} />
          <Route path="/exit-animation" element={<ExitAnimation />} />
          <Route path="/layout" element={<SharedLayoutAnimation />} />
          <Route
            path="/layout-with-text"
            element={<SharedLayoutWithTextAnimation />}
          />
          <Route path="/layout-with-cards" element={<LayoutWithCards />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
