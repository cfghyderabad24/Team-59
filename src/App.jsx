import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Events from './components/Events';
import Visits from './components/Visits';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/visit" element={<Visits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
