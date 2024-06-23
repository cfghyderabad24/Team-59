import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Events from './components/Events';
import Visits from './components/Visits';
import Footer from './components/Footer';
import DonationForm from './components/Donationform';
import ContactUs from './components/contact';
import SchemesAvailable from './components/Schemes';

function App() {
  return (
    <><div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/visit" element={<Visits />} />
        <Route path="/donate" element={<DonationForm/>} />
        <Route path="/schemes" element={<SchemesAvailable/>} />
        <Route path="/contact" element={<ContactUs/>} />
        </Routes>
         {/* <Route path="/Contact-US" element={<ContactUs />}/> */}
        
      </BrowserRouter>
      </div>

     <div><Footer/></div>
     </>
     
  );
}

export default App;
