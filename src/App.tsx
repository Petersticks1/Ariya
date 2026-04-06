import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Lounge from './pages/Lounge';
import Kitchen from './pages/Kitchen';
import Gym from './pages/Gym';
import CarWash from './pages/CarWash';
import VIPBooking from './pages/VIPBooking';
import EventBooking from './pages/EventBooking';
import Salon from './pages/Salon';
import Catering from './pages/Catering';
import Minimart from './pages/Minimart';
import Fabrics from './pages/Fabrics';
import Contact from './pages/Contact';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>

      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-text">
          <Navbar />
          <main className="flex-grow pt-[80px]"> {/* Offset for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lounge" element={<Lounge />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/gym" element={<Gym />} />
              <Route path="/carwash" element={<CarWash />} />
              <Route path="/salon" element={<Salon />} />
              <Route path="/minimart" element={<Minimart />} />
              <Route path="/fabrics" element={<Fabrics />} />
              <Route path="/event-booking" element={<EventBooking />} />
              <Route path="/vip-booking" element={<VIPBooking />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </>
  );
}

export default App;
