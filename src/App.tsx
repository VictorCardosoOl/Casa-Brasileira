/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import SmoothScrollWrapper from './components/layout/SmoothScrollWrapper';
import Hero from './components/sections/Hero';
import OurStory from './components/sections/OurStory';
import MenuSection from './components/sections/MenuSection';
import PassportSection from './components/sections/PassportSection';
import MapSection from './components/sections/MapSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <Sidebar />
      <main className="bg-casa-cream min-h-screen selection:bg-casa-pink-200 selection:text-casa-accent">
        <Hero />
        <OurStory />
        <MenuSection />
        <PassportSection />
        <MapSection />
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
