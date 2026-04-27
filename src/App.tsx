import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Courses />
      <Advantages />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
