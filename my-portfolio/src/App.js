
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import Scrollup from './components/Scrollup';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';



function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/> 
      <Qualification/>
      <Testimonial/>
      <Contact/> 
    </main>
    <Footer/>
    <Scrollup/>
    </>

  );
}

export default App;
