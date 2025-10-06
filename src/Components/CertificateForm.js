// src/components/CertificateForm.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CertificateForm() {
  const [certNumber, setCertNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handlePreview = async () => {
    if (!certNumber) {
      setError("Please enter certificate number!");
      return;
    }
    setLoading(true);
    router.push(`/certificate-preview/${encodeURIComponent(certNumber)}`);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        {/* Top Section */}
        <div className="bg-white px-8 pt-10 pb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">DOWNLOAD</h1>
          <span className="block text-2xl font-semibold mb-2" style={{color: "#8b5cf6"}}>
            YOUR <span className="text-indigo-400">Certificate.</span>
          </span>
        </div>
        {/* Bottom Section */}
        <div className="bg-gray-100 px-8 pb-10 pt-4 text-center">
          <p className="text-gray-700 mb-6">
            Download your certificate through your certificate number
          </p>
          <div className="flex items-center justify-center gap-0">
            <input
              type="text"
              placeholder="Enter cert No like CERT001"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value)}
              className="px-5 py-3 rounded-l-lg border border-gray-400 outline-none text-gray-700 bg-white text-base font-medium w-2/3 focus:ring-2 focus:ring-indigo-300"
              style={{ borderRight: "none" }}
            />
            <button
              onClick={handlePreview}
              className="px-7 py-3 rounded-r-lg bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-semibold text-base shadow transition hover:opacity-90 border border-gray-400"
              style={{ borderLeft: "none" }}
              disabled={loading}
            >
              {loading ? "Processing..." : "Download"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}