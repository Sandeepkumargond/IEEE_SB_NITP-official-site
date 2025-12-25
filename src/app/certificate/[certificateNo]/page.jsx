"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchMember } from "@/lib/adminAction";
import { Download, CheckCircle2, Printer } from "lucide-react";

// React PDF Imports
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CertificatePDF } from "@/components/CertificateTemplate";

export default function CertificatePage() {
  const params = useParams();
  const certificateNo = params?.certificateNo;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchCertificate = async () => {
      if (!certificateNo) return;
      try {
        const response = await fetchMember({ certificateNo });
        if (response.success) setMember(response.data);
        else setError(response.message || "Certificate not found");
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [certificateNo]);

  const handlePrint = () => window.print();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full border-4 border-[#1e3a8a]/10"></div>
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-t-[#1e3a8a] border-r-transparent border-b-transparent border-l-transparent"></div>
        </div>
        <p className="mt-8 text-xl font-serif font-bold text-[#1e3a8a] tracking-widest animate-pulse">VERIFYING</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-red-200 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Verification Failed</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/" className="px-6 py-2 bg-red-600 text-white rounded-lg">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 print:p-0 print:bg-white">
      <div className="max-w-5xl mx-auto print:max-w-full">
        
        {/* ================= CERTIFICATE PREVIEW AREA ================= */}
        <div 
          id="certificate-area"
          className="bg-white shadow-2xl p-2 print:shadow-none"
          style={{ border: '12px double #ca8a04', minHeight: '600px' }}
        >
          <div 
            className="h-full p-10 flex flex-col items-center justify-between bg-white text-center relative overflow-hidden"
            style={{ border: '2px solid #1e3a8a' }}
          >
            <div>
              <img src="/IEEE.png" alt="IEEE Logo" className="h-20 mx-auto mb-2 object-contain" />
              <p className="font-serif font-bold tracking-[0.2em] text-xs uppercase text-[#1e3a8a]">
                IEEE Student Branch NIT Patna
              </p>
            </div>

            <div>
              <h1 className="text-6xl font-serif italic font-bold text-[#1e3a8a]">Certificate</h1>
              <div className="flex items-center justify-center gap-4 mt-2">
                <div className="h-[1px] w-16 bg-[#ca8a04]" />
                <span className="text-lg font-serif tracking-[0.2em] uppercase text-[#a16207]">of Appreciation</span>
                <div className="h-[1px] w-16 bg-[#ca8a04]" />
              </div>
            </div>

            <div className="my-6">
              <p className="text-gray-500 italic font-serif text-lg mb-2">This certificate is proudly presented to</p>
              <h2 className="text-4xl font-serif font-bold mb-6 border-b-2 border-gray-100 inline-block px-10 pb-1 text-[#1d4ed8]">
                {member?.name}
              </h2>
              <div className="max-w-2xl mx-auto space-y-3">
                <p className="text-lg text-gray-700 leading-relaxed">
                  For outstanding dedication and contribution as a member of the 
                  <span className="font-bold text-[#1e3a8a]"> {member?.team} Team </span> 
                  within the IEEE Student Branch, NIT Patna, during the Academic Session 2025-2026.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-between items-end px-12 mt-4">
              <div className="text-center">
                <div className="w-40 h-[1px] mb-2 mx-auto bg-[#1e3a8a]" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a]">Branch Counselor</p>
              </div>
              <div className="text-[10px] font-mono text-gray-400">ID: {certificateNo}</div>
              <div className="text-center">
                <div className="w-40 h-[1px] mb-2 mx-auto bg-[#1e3a8a]" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a]">Professor In-Charge</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= VERIFICATION SECTION ================= */}
        <div className="print:hidden">
          <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Verification Details</h3>
                <p className="text-slate-500 text-sm">Official record of achievement for the 2025-26 session.</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-sm font-bold">
                <CheckCircle2 size={18} />
                Verified & Authentic
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div><label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Member Name</label><p className="text-lg font-semibold text-slate-800">{member?.name}</p></div>
                <div><label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assigned Team</label><p className="text-lg font-semibold text-blue-600">{member?.team}</p></div>
              </div>
              <div className="space-y-4">
                <div><label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Role</label><p className="text-lg font-semibold text-slate-800 capitalize">{member?.role}</p></div>
                <div><label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Certificate ID</label><p className="text-lg font-mono font-semibold text-slate-800">{certificateNo}</p></div>
              </div>
              <div className="space-y-4">
                <div><label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Issuance Date</label><p className="text-lg font-semibold text-slate-800">{member?.issuanceDate ? new Date(member.issuanceDate).toLocaleDateString() : 'N/A'}</p></div>
                <div><label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Designation</label><p className="text-lg font-semibold text-slate-800">{member?.designation || 'Member'}</p></div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center pb-12">
            {isClient && member && (
              <PDFDownloadLink 
                document={<CertificatePDF member={member} certificateNo={certificateNo} />} 
                fileName={`IEEE_Certificate_${member?.name.replace(/\s+/g, '_')}.pdf`}
              >
                {({ loading: pdfLoading }) => (
                  <button 
                    disabled={pdfLoading}
                    className="inline-flex items-center gap-3 px-12 py-4 bg-[#1e3a8a] text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                  >
                    <Download size={20} /> 
                    {pdfLoading ? "Preparing PDF..." : "Download Certificate (PDF)"}
                  </button>
                )}
              </PDFDownloadLink>
            )}
            
            <button onClick={handlePrint} className="inline-flex items-center gap-3 px-12 py-4 bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] rounded-xl font-bold hover:bg-slate-50 transition-all">
              <Printer size={20} /> Print Directly
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          .print\:hidden { display: none !important; }
          #certificate-area { border: 5px double #ca8a04 !important; width: 100% !important; margin: 0 !important; }
        }
      `}</style>
    </div>
  );
}