import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Reservations from './components/Reservations';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
