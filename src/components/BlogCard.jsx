"use client";

export default function BlogCard({ title, desc, images, date }) {
  const imageUrl = images && images.length > 0 ? images[0] : ""; // fallback image

  return (
    <div className="h-[420px] rounded-lg bg-[#0a3a52] border border-sky-500/30 shadow-lg hover:shadow-xl hover:border-sky-400 transition duration-300 flex flex-col overflow-hidden group">
      {/* Image Section */}
      {(imageUrl == "") ? "" :
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      }

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 mb-3">
          {title}
        </h3>
        <p className="text-gray-300 text-sm flex-1 line-clamp-4 mb-4">
          {desc}
        </p>
        <div className="pt-4 border-t border-sky-500/20">
          <p className="text-sky-300 text-xs font-medium">{date}</p>
        </div>
      </div>
    </div>
  );
}
