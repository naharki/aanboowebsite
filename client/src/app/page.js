'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer.jsx';
import Content from '@/components/Content.jsx';
import Header from '@/components/header';
import Social_media from '@/components/socialmedia';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // full viewport height
      }}
    >
      {/* Header at top */}
      <header>
        <Social_media />
        <Header />
        <Navbar />
      </header>

      {/* Main content takes remaining space */}
      <main
        style={{
          flexGrow: 1, // takes all available space between header and footer
          display: 'flex',
          alignItems: 'center', // vertical center
          justifyContent: 'center', // horizontal center
        }}
      >
        <Content />
      </main>

      {/* Footer at bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
