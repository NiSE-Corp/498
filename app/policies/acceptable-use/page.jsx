import GetTermsEmbed from '../../components/Terms';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AcceptableUsePage = () => {
  return (
    <>
      <Navbar />
      <main className='p-4 bg-white text-black min-h-screen'>
        <h1 className='text-2xl font-bold mb-4'>Acceptable Use Policy</h1>
        <GetTermsEmbed documentType='acceptable-use' />
      </main>

      <Footer />
    </>
  );
};

export default AcceptableUsePage;
