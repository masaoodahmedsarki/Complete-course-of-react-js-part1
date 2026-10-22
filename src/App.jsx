
import { useState, useEffect } from 'react';

import Hero from './components/Hero';
import Header from './components/Header/Header';
import About from './components/About';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    );
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 ">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About/>
      <Services/>
      <OurWork/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
