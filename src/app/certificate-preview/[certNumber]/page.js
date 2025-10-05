"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CertificatePreviewPage() {
  const router = useRouter();
  const params = useParams();
  const certNumber = params.certNumber;
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/certificate?id=${encodeURIComponent(certNumber)}`);
        if (!res.ok) {
          setError("Certificate not found.");
          setLoading(false);
          return;
        }
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        setPreviewUrl(url);
      } catch (err) {
        setError("Failed to fetch certificate.");
      }
      setLoading(false);
    };
    if (certNumber) fetchCertificate();
    return () => {
      if (previewUrl) window.URL.revokeObjectURL(previewUrl);
    };
  }, [certNumber]);

  const handleDownload = () => {
    if (previewUrl) {
      const a = document.createElement("a");
      a.href = previewUrl;
      a.download = `${certNumber || "certificate"}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[80vh] px-4 py-10 bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Certificate Preview</h2>
        {loading && <p className="text-gray-600 mb-4">Loading...</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {previewUrl && (
          <iframe
            title="certificate-preview"
            src={previewUrl}
            className="w-full h-[700px] rounded-xl border mb-6"
          />
        )}
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-300 transition"
          >
            Back
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition"
            disabled={!previewUrl}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}