
// import CertificateForm from '../../../Components/CertificateForm';
import CertificateForm from '../../../src/components/CertificateForm'
import Footer from '../../../src/components/Footer';
import Navbar from '../../../src/components/Navbar';


export default function ECertificatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-400 to-blue-700">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <CertificateForm />
      </main>
      <Footer />
    </div>
  ); 
}
