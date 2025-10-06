"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../../Components/Footer";

export default function CertificatePage() {
  const params = useParams();
  const certificateNo = params?.certNumber;

  const [member, setMember] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      if (!certificateNo) {
      setError("Missing certificate number in URL");
      setLoading(false);
      return;
    }
    const fetchCertificate = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch mock.json from public folder
        const res = await fetch("/mock.json");
        if (!res.ok) throw new Error("mock.json fetch failed");
        const data = await res.json();

        // Find the member matching the certificateNo
        const foundMember = data.members?.find(m => m.certificate_no === certificateNo);

         if (!foundMember) {
          setError("Certificate not found");
          return;
        }

        // Simulate certificate object
        const cert = {
          certificate_no: foundMember.certificate_no,
          generated_on: foundMember.generated_on
        };

        setMember(foundMember);
        setCertificate(cert);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch certificate data");
      } finally {
        setLoading(false);
      }
    };

     fetchCertificate();
  }, [certificateNo]);

  if (loading) {
    return (
     <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading certificate...</p>
        </div>
      </div>
      <footer/>
     </>
    );
  }

  if (error) {
    return (
      <>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full border-2 border-red-600">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Certificate Verification Failed</h1>
            <p className="text-gray-600">{error}</p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Certificate Header */}
        <div className="bg-green-700 text-white py-8 px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">CERTIFICATE</h1>
          <h2 className="text-2xl font-semibold">OF APPRECIATION</h2>
        </div>

        {/* Certificate Content */}
        <div className="p-2 md:p-8 relative">
          <div className="border-4 border-gray-200 p-2 md:p-8 rounded-lg relative z-10 bg-white">
            <div className="text-center mb-8">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800">
                Certificate No: {certificate?.certificate_no}
              </h2>
              <p className="text-gray-600 mt-1">
                Generated on: {new Date(certificate?.generated_on).toLocaleDateString()}
              </p>
            </div>

            <div className="text-center mb-10">
              <p className="text-xl text-gray-800">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
              <h3 className="text-4xl font-bold text-green-800 my-6 font-serif">{member?.name}</h3>
              <p className="text-xl text-gray-800">
                for being an active and dedicated member of the <span className="font-semibold">IEEE NITP CLUB</span>, NIT Patna,
                and for making remarkable contributions during the Academic Session 2025-2026.
              </p>
            </div>

            <div className="text-lg text-center text-gray-700 mb-8">
              <p>In recognition of {member?.role === 'volunteer' ? 'his/her' : 'his'} valuable contributions towards the design, 
                development, and continuous maintenance of the IEEE NITP official website.</p>
            </div>

            {/* Digital signatures */}
            <div className="mt-16 flex justify-between items-end">
              <div className="text-center">
                <div className="text-sm md:text-lg italic font-medium text-blue-900 mb-2">Digitally signed by</div>
                <div className="font-signature text-xl mb-1 text-blue-800">PROF NAME</div>
                <div className="h-0.5 w-30 md:w-40 bg-blue-500 mb-1 mx-auto"></div>
                <p className="text-xs md:text-sm text-gray-700 mt-1">PROFESSOR Designation</p>
              </div>
              <div className="text-center">
                <div className="text-sm md:text-lg italic font-medium text-blue-900 mb-2">Digitally signed by</div>
                <div className="font-signature text-xl mb-1 text-blue-800">PROF NAME</div>
                <div className="h-0.5 w-30 md:w-40 bg-blue-500 mb-1 mx-auto"></div>
                <p className="text-xs md:text-sm text-gray-700 mt-1">PROFESSOR Designation</p>
              </div>
            </div>
          </div>

          {/* Member Details */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">Member Details</h3>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Verified ✓
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600">Name: <span className="font-medium text-gray-800">{member?.name}</span></p>
                <p className="text-gray-600">Email: <span className="font-medium text-gray-800">{member?.email}</span></p>
                <p className="text-gray-600">Role: <span className="font-medium text-gray-800">{member?.role === 'volunteer' ? 'Volunteer' : 'Professor In-Charge'}</span></p>
              </div>
              <div>
                <p className="text-gray-600">Year: <span className="font-medium text-gray-800">{member?.year}</span></p>
                <p className="text-gray-600">Designation: <span className="font-medium text-gray-800">{member?.designation}</span></p>
              </div>
            </div>

            {member?.interests && (
              <div className="mt-4">
                <p className="text-gray-600">Contributions:</p>
                <p className="font-medium text-gray-800 mt-1">{member.interests}</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
