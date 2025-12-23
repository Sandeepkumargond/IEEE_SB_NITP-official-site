"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchMember } from "@/lib/adminAction";
import { Download } from "lucide-react";

export default function CertificatePage() {
  const params = useParams();
  const certificateNo = params?.certificateNo;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const certificateRef = useRef(null);

  useEffect(() => {
    if (!certificateNo) {
      setError("Missing certificate number");
      setLoading(false);
      return;
    }

    const fetchCertificate = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchMember({ certificateNo });

        if (!response.success || !response.data) {
          setError(response.message || "Certificate not found");
          return;
        }

        setMember(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch certificate data");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [certificateNo]);

  const handleDownload = async () => {
    try {
      const element = certificateRef.current;
      if (!element) return;

      // Clone the element to avoid modifying the original
      const clonedElement = element.cloneNode(true);
      
      // Create a temporary container
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.appendChild(clonedElement);
      document.body.appendChild(container);

      // Dynamically import html2pdf
      const html2pdf = (await import("html2pdf.js")).default;

      const options = {
        margin: [10, 10, 10, 10],
        filename: `Certificate_${certificateNo}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          ignoreElements: (element) => {
            // Ignore script tags and other problematic elements
            return element.tagName === 'SCRIPT';
          }
        },
        jsPDF: { orientation: "landscape", unit: "mm", format: "a4" },
      };

      await html2pdf().set(options).from(clonedElement).save();
      
      // Clean up
      document.body.removeChild(container);
    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Error downloading certificate. Please try again.");
    }
  }


  if (loading) {
    return (
     <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading certificate...</p>
        </div>
      </div>
     </>
    );
  }

  if (error) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>

    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Certificate Container with Borders */}
        <div className="border-4 border-yellow-500 p-4 shadow-2xl" style={{aspectRatio: '16 / 12'}}>
          <div className="border-2 border-blue-700 h-full flex flex-col bg-white" ref={certificateRef}>
            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-10 px-8 text-center flex-none">
              <div className="mb-2">
                <div className="text-xs tracking-widest font-semibold text-blue-100">IEEE STUDENT BRANCH</div>
                <div className="text-xs tracking-widest font-semibold text-blue-100">NIT PATNA</div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-1 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>CERTIFICATE</h1>
              <div className="flex justify-center my-2">
                <div className="h-1 w-32 bg-yellow-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-widest" style={{fontFamily: 'Georgia, serif'}}>OF APPRECIATION</h2>
            </div>

            {/* Certificate Content */}
            <div className="flex-grow flex flex-col p-8 md:p-10 bg-white overflow-hidden">
              {/* Certificate Number and Date */}
              <div className="text-center mb-8 border-b-2 border-gray-300 pb-4 flex-none">
                <p className="text-gray-700 text-sm tracking-wider">Certificate No: <span className="font-bold text-gray-900">{certificateNo}</span></p>
                <p className="text-gray-600 text-xs mt-1 tracking-wide">
                  Issued on: {new Date(member?.issuanceDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              {/* Main Text */}
              <div className="text-center flex-grow flex flex-col justify-start">
                <p className="text-gray-800 text-xs tracking-widest font-semibold mb-4">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
                <h3 className="text-4xl font-bold text-blue-700 my-6 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>{member?.name}</h3>
                
                <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  <p className="font-medium">
                    for being an active and dedicated member of the <span className="font-bold text-blue-700">IEEE STUDENT BRANCH</span>, NIT Patna,
                  </p>
                  <p className="font-medium">
                    and for making remarkable contributions during the Academic Session 2025-2026.
                  </p>
                </div>

                {/* Recognition Text */}
                <div className="text-center text-gray-700 my-6 text-xs leading-relaxed italic border-t-2 border-b-2 border-gray-300 py-4">
                  <p>In recognition of {member?.role === 'volunteer' ? 'his/her' : 'his'} valuable contributions towards the design, development, and continuous maintenance of the IEEE NITP official website.</p>
                </div>
              </div>

              {/* Digital signatures */}
              <div className="flex justify-between items-end flex-none mt-6 px-4">
                <div className="text-center flex-1">
                  <div className="mb-8"></div>
                  <div className="h-0.5 w-28 bg-blue-700 mx-auto mb-1"></div>
                  <div className="italic text-xs text-gray-700 font-medium mt-1">Digitally signed</div>
                  <p className="text-xs text-gray-600 mt-1 font-semibold">PROFESSOR IN-CHARGE</p>
                  <p className="text-xs text-gray-500">IEEE Student Branch</p>
                </div>
                <div className="text-center flex-1">
                  <div className="mb-8"></div>
                  <div className="h-0.5 w-28 bg-blue-700 mx-auto mb-1"></div>
                  <div className="italic text-xs text-gray-700 font-medium mt-1">Digitally signed</div>
                  <p className="text-xs text-gray-600 mt-1 font-semibold">BRANCH COUNSELOR</p>
                  <p className="text-xs text-gray-500">NIT Patna</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Member Details Card */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-green-800">Certificate Details</h3>
            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              ✓ Verified & Authentic
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-gray-700"><span className="font-semibold text-gray-800">Name:</span> <span className="text-lg text-green-800">{member?.name}</span></p>
              <p className="text-gray-700"><span className="font-semibold text-gray-800">Email:</span> <span className="text-gray-800">{member?.email}</span></p>
              <p className="text-gray-700"><span className="font-semibold text-gray-800">Role:</span> <span className="font-medium text-gray-800">{member?.role === 'volunteer' ? 'Volunteer' : 'Professor In-Charge'}</span></p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700"><span className="font-semibold text-gray-800">Year:</span> <span className="text-gray-800">{member?.year || 'N/A'}</span></p>
              <p className="text-gray-700"><span className="font-semibold text-gray-800">Designation:</span> <span className="text-gray-800">{member?.designation || 'Member'}</span></p>
              <p className="text-gray-700"><span className="font-semibold text-gray-800">Certificate No:</span> <span className="font-mono text-gray-900">{certificateNo}</span></p>
            </div>
          </div>

          {member?.interests && (
            <div className="mt-6 pt-6 border-t-2 border-green-200">
              <p className="text-gray-700 font-semibold mb-2">Contributions & Achievements:</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">{member.interests}</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center pb-4">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 gap-2 transition-all transform hover:scale-105"
          >
            <Download size={22} />
            Download Certificate as PDF
          </button>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}
