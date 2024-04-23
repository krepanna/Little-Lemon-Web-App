import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Nav />
        <Header />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
