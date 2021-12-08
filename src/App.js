import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Work from './Components/Work';

function App() {
  return (
    <div>
      <Nav />
      <>
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      </>
      <Footer />
    </div>
  );
}

export default App;
