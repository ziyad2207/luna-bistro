import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SignatureDishes from '@/components/SignatureDishes';
import FullMenu from '@/components/FullMenu';
import Chef from '@/components/Chef';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <FullMenu />
        <Chef />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </>
  );
}
