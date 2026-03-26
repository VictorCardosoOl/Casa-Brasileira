/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import SmoothScrollWrapper from './components/layout/SmoothScrollWrapper';
import Hero from './components/sections/Hero';
import CulinaryConcept from './components/sections/CulinaryConcept';
import TheSpace from './components/sections/TheSpace';
import MenuSection from './components/sections/MenuSection';
import ChefTayna from './components/sections/ChefTayna';
import MapSection from './components/sections/MapSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <main className="bg-casa-cream min-h-screen selection:bg-casa-accent/20 selection:text-casa-accent">
        <Hero />
        <CulinaryConcept />
        <TheSpace />
        <MenuSection />
        <ChefTayna />
        <MapSection />
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
