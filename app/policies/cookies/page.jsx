'use client';

import GetTermsEmbed from '../../components/Terms';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CookiesPage = () => {
  return (
    <>
      <Navbar />
      <main className='p-4 bg-white text-black min-h-screen'>
        <h1 className='text-2xl font-bold mb-4'>Cookies Policy</h1>
        <GetTermsEmbed documentType='cookies' />
      </main>

      <Footer />
    </>
  );
};

export default CookiesPage;
