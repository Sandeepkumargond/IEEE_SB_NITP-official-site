"use client";

export default function BlogCard({ title, desc, images, date }) {
  const imageUrl = images && images.length > 0 ? images[0] : ""; // fallback image

  return (
    <div className="h-[400px] rounded-3xl bg-white/90 shadow-md backdrop-blur-sm transition hover:shadow-lg flex flex-col overflow-hidden border-t-10 border-[#0b9ed4]">
      {/* Image Section */}
      {(imageUrl == "") ? "" :
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      }

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center text-center flex-1">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-700 text-sm flex-1 flex items-center justify-center line-clamp-3">
          {desc}
        </p>
        <div className="mt-4">
          <p className="text-gray-600 text-xs">{date}</p>
        </div>
      </div>
    </div>
  );
}
