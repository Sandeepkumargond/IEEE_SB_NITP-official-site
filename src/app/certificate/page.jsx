"use client"
import CertificateForm from '@/components/CertificateForm';

export default function ECertificatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      <main className="flex-grow flex items-center justify-center">
        <CertificateForm />
      </main>
    </div>
  ); 
}
