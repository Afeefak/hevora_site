import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Industries from "./components/Industries";
import OurApproach from "./components/OurApproach";
import TechStack from "./components/TechStack";
import CaseStudiesHome from "./components/CaseStudiesHome";
import Contact from "./components/Contact"; // This is your Contact Component
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudyList from "./pages/case-study/CaseStudyList";
import CaseStudyDetail from "./pages/case-study/CaseStudyDetail";

import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <ScrollToTop />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="pt-20">
              <Hero />
              <Services />
              <Steps />
              <Industries />
              <OurApproach />
              <TechStack />
              <CaseStudiesHome />
              {/* You can keep Contact here if you want it on Home too, 
                  OR remove it if you only want it on the separate page. 
                  I left it here so the Home page still looks complete. */}
              <Contact />
            </div>
          }
        />

        {/* ✅ ADD THIS NEW ROUTE FOR THE CONTACT PAGE */}
        <Route
          path="/contact"
          element={
            // Added pt-20 so the Fixed Navbar doesn't cover the top of the form
            <div className="pt-20 min-h-screen bg-[#20498A]">
              <Contact />
            </div>
          }
        />

        {/* SERVICE DETAIL */}
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/* CASE STUDIES */}
        <Route path="/case-studies" element={<CaseStudyList />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
