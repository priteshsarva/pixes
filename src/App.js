
import './App.css';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';
import OurWork from './components/work/OurWork';
import wave1 from './assets/images/wave-1.png'
import wave2 from './assets/images/wave-2.png'


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function App() {

 


  return <>
    <div className="main">
      <Nav />
      <Hero />
      <OurWork />
      <div style={{ width: '100%', height: '100%', }}>
        <img src={wave1} style={{
          width: '100%', height: '100%', objectFit: 'cover', position: 'absolute'
        }} />
      </div>
      <Services />   
      <About />
      <div style={{ width: '100%', height: '100%', }}>
        <img src={wave1} style={{
          width: '100%', height: '100%', objectFit: 'cover', position: 'absolute',transform:' scaleX(-1)'
        }} />
      </div>
      <Clients />

      <Footer />

    </div>




  </>;
}

export default App;
