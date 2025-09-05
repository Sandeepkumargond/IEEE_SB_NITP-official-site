// src/components/CertificateForm.js
"use client";
import { useState } from "react";

export default function CertificateForm() {
  const [certNumber, setCertNumber] = useState("");

  const handleDownload = async () => {
    if (!certNumber) {
      alert("Please enter certificate number!");
      return;
    }

    try {
      const res = await fetch(`/api/certificate?id=${certNumber}`);

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || "Error downloading certificate");
        return;
      }

      alert(`Downloading certificate for: ${certNumber}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${certNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      // alert("Something went wrong!");
    }
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
            onClick={handleDownload}
            className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-5 py-2 hover:opacity-90 transition-all">
            Download
      </button>

            </div>
        </div>
    </div>
  );
}
