
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Download } from "lucide-react";

export default function CertificateForm() {
  const [certNumber, setCertNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handlePreview = async () => {
    if (!certNumber.trim()) {
      setError("Please enter certificate number!");
      return;
    }
    setError(null);
    setLoading(true);
    router.push(`/certificate/${encodeURIComponent(certNumber)}`);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePreview();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border-t-8 border-blue-700 bg-white">
        {/* Top Section */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 px-8 pt-12 pb-8 text-center text-white">
          <div className="mb-4 flex justify-center">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Download size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">DOWNLOAD</h1>
          <p className="text-lg font-semibold text-blue-50">
            YOUR <span className="text-yellow-400">Certificate</span>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-50 px-8 py-10 text-center">
          <p className="text-gray-700 mb-8 text-base font-medium">
            Enter your certificate number to retrieve and download your IEEE NITP certificate of appreciation
          </p>

          {/* Input Section */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter cert No like ieeeenitp-2025-001"
              value={certNumber}
              onChange={(e) => {
                setCertNumber(e.target.value);
                if (error) setError(null);
              }}
              onKeyPress={handleKeyPress}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 outline-none text-gray-800 bg-white text-base font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition placeholder-gray-500"
            />
          </div>

          {/* Download Button */}
          <button
            onClick={handlePreview}
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-800 hover:to-blue-900 transition transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="inline-block animate-spin">⏳</span>
                Processing...
              </>
            ) : (
              <>
                <Download size={20} />
                Download Certificate
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <p className="text-red-700 font-medium text-sm">⚠️ {error}</p>
            </div>
          )}

          {/* Helper Section */}
          <div className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-xs text-gray-600 mb-3">Certificate number format:</p>
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <p className="text-blue-900 font-mono text-sm">ieeeenitp-YYYY-XXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}