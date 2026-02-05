import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Products } from './components/sections/Products';
import { Demo } from './components/sections/Demo';
import { HowItWorks } from './components/sections/HowItWorks';
import { Contact } from './components/sections/Contact';
import { Newsletter } from './components/sections/Newsletter';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Demo />
        <HowItWorks />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
