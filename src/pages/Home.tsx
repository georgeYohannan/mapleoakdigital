import { Hero } from '../components/sections/Hero';
import { Products } from '../components/sections/Products';
import { Demo } from '../components/sections/Demo';
import { Contact } from '../components/sections/Contact';
import { Newsletter } from '../components/sections/Newsletter';

export function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Demo />
      <Contact />
      <Newsletter />
    </>
  );
}
