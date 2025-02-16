import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/home/About';
import Ingredients from '../components/home/Ingredients';
import Contact from '../components/home/Contact';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Ingredients />
      <Contact />
    </>
  );
}

export default Home;
