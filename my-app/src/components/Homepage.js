import React from 'react';
import Header from './Header';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function Homepage() {
  return (
    <>
        <Header />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
    </>
  );
}

export default Homepage;
