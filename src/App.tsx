import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import Amenities from './components/Amenities';
import LocationAdvantage from './components/LocationAdvantage';
import Footer from './components/Footer';

// Code-split below-the-fold & interactive components for near-instant FCP/LCP
const Gallery = lazy(() => import('./components/Gallery'));
const LegalDocuments = lazy(() => import('./components/LegalDocuments'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const FloatingCTAs = lazy(() => import('./components/FloatingCTAs'));
const AmenitiesPopup = lazy(() => import('./components/AmenitiesPopup'));
const LLM = lazy(() => import('./components/llm'));
const NotFound = lazy(() => import('./components/NotFound'));

function Home() {
  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full max-w-full relative min-h-screen">
      <Suspense fallback={null}>
        <LLM />
      </Suspense>
      <Navbar />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <About />
        <FeaturedProperties />
        <WhyChooseUs />
        <Amenities />
        <LocationAdvantage />
        <Suspense fallback={<div id="gallery" className="min-h-[400px] flex items-center justify-center py-24" />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div id="legal" className="min-h-[400px] flex items-center justify-center py-24" />}>
          <LegalDocuments />
        </Suspense>
        <Suspense fallback={<div id="faq" className="min-h-[400px] flex items-center justify-center py-24" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div id="contact" className="min-h-[400px] flex items-center justify-center py-24" />}>
          <ContactForm />
        </Suspense>
      </main>
      
      <Footer />
      <Suspense fallback={null}>
        <FloatingCTAs />
        <AmenitiesPopup />
      </Suspense>
      
      <div className="fixed inset-0 bg-[#0f172a] -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a] pointer-events-none transform-gpu"></div>
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
