import Image from 'next/image';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CallToAction from './components/CallToAction/CallToAction';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Hero />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
