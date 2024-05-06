import './App.css';
import Nav from './components/Nav';
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
      </main>
    </>
  );
}

export default App;
