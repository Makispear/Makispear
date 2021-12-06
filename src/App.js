import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';

function App() {
  return (
    <div>
      <Nav />
      <>
        <Hero />
        <About />
      </>
      <Footer />
    </div>
  );
}

export default App;
