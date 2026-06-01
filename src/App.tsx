import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const FeaturedProperties = lazy(() => import('./components/FeaturedProperties'));
const Amenities = lazy(() => import('./components/Amenities'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const LocationAdvantage = lazy(() => import('./components/LocationAdvantage'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingCTAs = lazy(() => import('./components/FloatingCTAs'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const FAQ = lazy(() => import('./components/FAQ'));
const NotFound = lazy(() => import('./components/NotFound'));

const SectionFallback = () => (
  <div className="h-48 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin"></div>
  </div>
);

function Home() {
  return (
    <div className="font-sans antialiased text-white select-none">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FeaturedProperties />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Amenities />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <LocationAdvantage />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ContactForm />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <FloatingCTAs />
      </Suspense>
      
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
