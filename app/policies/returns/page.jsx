import GetTermsEmbed from '../../components/Terms';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ReturnPage = () => {
  return (
    <>
      <Navbar />
      <main className='p-4 bg-white text-black min-h-screen'>
        <h1 className='text-2xl font-bold mb-4'>Returns Policy</h1>
        <GetTermsEmbed documentType='return' />
      </main>

      <Footer />
    </>
  );
};

export default ReturnPage;
