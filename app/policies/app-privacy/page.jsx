import GetTermsEmbed from '../../components/Terms';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AppPrivacyPage = () => {
  return (
    <>
      <Navbar />
      <main className='p-4 bg-white text-black min-h-screen'>
        <h1 className='text-2xl font-bold mb-4'>App Privacy Policy</h1>
        <GetTermsEmbed documentType='app-privacy' />
      </main>

      <Footer />
    </>
  );
};

export default AppPrivacyPage;
