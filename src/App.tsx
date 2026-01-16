import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import OurApproach from "./components/OurApproach";
import TechStack from "./components/TechStack";
import CaseStudyList from "./pages/case-study/CaseStudyList";
import CaseStudyDetail from "./pages/case-study/CaseStudyDetail";
import CaseStudiesHome from "./components/CaseStudiesHome";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div className="pt-20">
              <Hero />
              <Services />
              <Industries />
              <OurApproach />
              <TechStack />
              <CaseStudiesHome /> {/* ✅ NOW IT WILL SHOW */}
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
