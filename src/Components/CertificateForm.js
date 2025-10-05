// src/components/CertificateForm.js
"use client";
import { useState, useEffect } from "react";

export default function CertificateForm() {
  const [certNumber, setCertNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        window.URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFetchCertificate = async () => {
    if (!certNumber) {
      alert("Please enter certificate number!");
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/certificate?id=${encodeURIComponent(certNumber)}`);

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const msg = errorData?.error || "Error fetching certificate";
        setError(msg);
        setLoading(false);
        return null;
      }

      const blob = await res.blob();
      // optional: ensure it's a PDF
      if (!blob.type || !blob.type.includes("pdf")) {
        // still allow preview/download, but warn
        console.warn("Fetched file is not a PDF:", blob.type);
      }

      const url = window.URL.createObjectURL(blob);
      // revoke previous preview url if any
      if (previewUrl) {
        window.URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(url);
      setShowPreview(true);
      setLoading(false);
      return blob;
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching the certificate.");
      setLoading(false);
      return null;
    }
  };

  const handleDownload = async () => {
    // If a preview is already available, download that blob via the preview URL.
    if (previewUrl) {
      const a = document.createElement("a");
      a.href = previewUrl;
      a.download = `${certNumber || "certificate"}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    // otherwise fetch and download directly
    const blob = await handleFetchCertificate();
    if (blob) {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${certNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  };

  const handleOpenPreview = async () => {
    if (!previewUrl) {
      await handleFetchCertificate();
    } else {
      setShowPreview(true);
    }
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    // keep previewUrl available for download until user navigates away or we revoke on unmount
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          DOWNLOAD <span className="block text-indigo-400">YOUR Certificate.</span>
        </h1>

        <p className="text-gray-600 mt-3">
          Download your certificate through your certification number
        </p>

        <div className="mt-6 flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Enter Certificate Number"
            value={certNumber}
            onChange={(e) => setCertNumber(e.target.value)}
            className="flex-1 px-4 py-2 outline-none text-gray-700"
          />

          <button
            onClick={handleOpenPreview}
            className="bg-white text-indigo-600 px-4 py-2 hover:bg-gray-50 border-l">
            Preview
          </button>

          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-5 py-2 hover:opacity-90 transition-all">
            {loading ? "Processing..." : "Download"}
          </button>
        </div>

        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>

      {/* Preview Modal */}
      {showPreview && previewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <div className="text-sm text-gray-700">Preview: {certNumber}</div>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    // download using current previewUrl
                    const a = document.createElement("a");
                    a.href = previewUrl;
                    a.download = `${certNumber || "certificate"}.pdf`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                  }}
                  className="bg-indigo-600 text-white px-3 py-1 rounded">
                  Download
                </button>
                <button
                  onClick={handleClosePreview}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded">
                  Close
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100">
              <iframe
                title="certificate-preview"
                src={previewUrl}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}