import Image from 'next/image';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Hero />
    </div>
  );
}
