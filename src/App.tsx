/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Partnership from './components/Partnership';
import Merchandise from './components/Merchandise';
import About from './components/About';
import RegisterInterestForm from './components/RegisterInterestForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-chalk text-ink antialiased overflow-x-hidden selection:bg-flame selection:text-chalk">
      {/* 1. Natively Hoisted SEO Tags and Organization Schemas */}
      <SEO />

      {/* 2. Persistent Translucent/Sticky Brand Navigation */}
      <Header />

      {/* 3. Dark Cosmic Interactive Hero Section with 3D Parallax Canvas */}
      <Hero 
        onSchoolsClick={() => handleScrollToSection('#schools')} 
        onRegisterClick={() => handleScrollToSection('#register')} 
      />

      {/* 4. Tight Mission Section: Statement + Combined Values/Benefits Grid */}
      <Mission />

      {/* 5. Available Programs: 50/50 Tumbling & Cheerleading */}
      <Programs onContactClick={() => handleScrollToSection('#contact')} />

      {/* 6. Comparison Table for Institutional school integrations */}
      <Partnership onContactClick={() => handleScrollToSection('#contact')} />

      {/* 7. Official Team Merchandise & Athletic Gear */}
      <Merchandise />

      {/* 8. High-end Editorial Founders Narrative Story */}
      <About />

      {/* 9. Interactive Expression of Interest Form (Dark Cosmic Styling) */}
      <RegisterInterestForm />

      {/* 10. Location, Maps, Social Shortcuts & Direct Inquiries Desk */}
      <ContactSection />

      {/* 11. Deep Dark Premium Footer */}
      <Footer />
    </div>
  );
}
