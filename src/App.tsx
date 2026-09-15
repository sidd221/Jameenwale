import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import Amenities from './components/Amenities';
import WhyChooseUs from './components/WhyChooseUs';
import LocationAdvantage from './components/LocationAdvantage';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import AmenitiesPopup from './components/AmenitiesPopup';
import LLM from './components/llm';

const NotFound = lazy(() => import('./components/NotFound'));

function Home() {
  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full max-w-full relative min-h-screen">
      <LLM />
      <Navbar />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <About />
        <FeaturedProperties />
        <WhyChooseUs />
        <Amenities />
        <LocationAdvantage />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      
      <Footer />
      <FloatingCTAs />
      <AmenitiesPopup />
      
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a]"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={
          <Suspense fallback={<div className="min-h-screen bg-[#0f172a] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin"></div></div>}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}
