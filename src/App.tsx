import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Courses />
      <Services />
      <Advantages />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
