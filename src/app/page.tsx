import Image from 'next/image';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

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
