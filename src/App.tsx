import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEOHead from './components/SEOHead';

// Code-split below-the-fold components for ultra-fast initial load
const About = lazy(() => import('./components/About'));
const FeaturedProperties = lazy(() => import('./components/FeaturedProperties'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Amenities = lazy(() => import('./components/Amenities'));
const LocationAdvantage = lazy(() => import('./components/LocationAdvantage'));
const Gallery = lazy(() => import('./components/Gallery'));
const LegalDocuments = lazy(() => import('./components/LegalDocuments'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingCTAs = lazy(() => import('./components/FloatingCTAs'));
const AmenitiesPopup = lazy(() => import('./components/AmenitiesPopup'));
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const NotFound = lazy(() => import('./components/NotFound'));

// Primary Hub & Corridor Pages (Top 20 Priority SEO Strategy)
const PatnaPlots = lazy(() => import('./pages/PatnaPlots'));
const BiharPlots = lazy(() => import('./pages/BiharPlots'));
const BihtaPlots = lazy(() => import('./pages/BihtaPlots'));
const DanapurPlots = lazy(() => import('./pages/DanapurPlots'));
const NaubatpurPlots = lazy(() => import('./pages/NaubatpurPlots'));
const RajgirPlots = lazy(() => import('./pages/RajgirPlots'));
const ShivalaPlots = lazy(() => import('./pages/ShivalaPlots'));

// Buyer Guides & Legal Pages
const LandBuyingChecklist = lazy(() => import('./pages/LandBuyingChecklist'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin"></div>
    </div>
  );
}

function SectionSkeleton({ minHeight = '400px' }: { minHeight?: string }) {
  return <div style={{ minHeight }} className="w-full flex items-center justify-center" aria-hidden="true" />;
}

function Home() {
  return (
    <div className="font-sans antialiased text-white select-none overflow-x-hidden w-full max-w-full relative min-h-screen">
      <SEOHead
        title="Plots for Sale in Patna | Residential Plots & Land | JameenWale"
        description="Looking for plots for sale in Patna? Explore verified residential plots & land in gated townships at Shivala More, Danapur & Bihta from ₹21L. Book a free site visit!"
        canonicalUrl="https://jameenwale.vercel.app/"
      />
      <Navbar />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <Suspense fallback={<SectionSkeleton minHeight="500px" />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="600px" />}>
          <FeaturedProperties />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="500px" />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <Amenities />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="500px" />}>
          <LocationAdvantage />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <LegalDocuments />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <ContactForm />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionSkeleton minHeight="200px" />}>
        <Footer />
      </Suspense>
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
        {/* Core Homepage (Targeting "Plots for Sale in Patna") */}
        <Route path="/" element={<Home />} />

        {/* Primary Patna Metropolitan Hub (Keywords 1-5) */}
        <Route path="/plots-for-sale-in-patna" element={
          <Suspense fallback={<PageLoader />}>
            <PatnaPlots />
          </Suspense>
        } />

        {/* Bihar Statewide Hub (Keywords 6-9 + Statewide Demand) */}
        <Route path="/plots-for-sale-in-bihar" element={
          <Suspense fallback={<PageLoader />}>
            <BiharPlots />
          </Suspense>
        } />

        {/* Strategic Corridor Landing Pages */}
        <Route path="/plots-for-sale-in-bihta" element={
          <Suspense fallback={<PageLoader />}>
            <BihtaPlots />
          </Suspense>
        } />
        <Route path="/plots-for-sale-in-danapur" element={
          <Suspense fallback={<PageLoader />}>
            <DanapurPlots />
          </Suspense>
        } />
        <Route path="/plots-for-sale-in-naubatpur" element={
          <Suspense fallback={<PageLoader />}>
            <NaubatpurPlots />
          </Suspense>
        } />
        <Route path="/plots-for-sale-in-rajgir" element={
          <Suspense fallback={<PageLoader />}>
            <RajgirPlots />
          </Suspense>
        } />

        {/* Specific Plotted Project Page */}
        <Route path="/plots-in-shivala-patna" element={
          <Suspense fallback={<PageLoader />}>
            <ShivalaPlots />
          </Suspense>
        } />

        {/* URL Aliases for Backward Compatibility / External Backlinks */}
        <Route path="/plots-in-bihta-patna" element={<Navigate to="/plots-for-sale-in-bihta" replace />} />
        <Route path="/plots-in-rajgir" element={<Navigate to="/plots-for-sale-in-rajgir" replace />} />

        {/* Educational Buyer Guide */}
        <Route path="/land-buying-checklist-bihar" element={
          <Suspense fallback={<PageLoader />}>
            <LandBuyingChecklist />
          </Suspense>
        } />

        {/* Legal & Policy Pages */}
        <Route path="/privacy-policy" element={
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<PageLoader />}>
            <Terms />
          </Suspense>
        } />
        <Route path="/disclaimer" element={
          <Suspense fallback={<PageLoader />}>
            <Disclaimer />
          </Suspense>
        } />

        {/* 404 Page */}
        <Route path="*" element={
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
      <Suspense fallback={null}>
        <CookieBanner />
      </Suspense>
    </BrowserRouter>
  );
}
