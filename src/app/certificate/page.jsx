"use client"
import CertificateForm from '@/components/CertificateForm';

export default function ECertificatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-400 to-blue-700">
      <main className="flex-grow flex items-center justify-center">
        <CertificateForm />
      </main>
    </div>
  ); 
}
