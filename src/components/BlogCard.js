"use client";

export default function BlogCard({ title, excerpt, date, redirectUrl }) {
  return (
    <div className="h-[300px] rounded-3xl bg-white/90 shadow-md backdrop-blur-sm transition hover:shadow-lg flex flex-col">
      <div className="h-6 rounded-t-3xl bg-sky-600" />
      <div className="p-6 flex flex-col items-center text-center flex-1">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-700 flex-1 flex items-center justify-center">
          {excerpt}
        </p>
        <div className="mt-4 space-y-2">
          <a
            href={redirectUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sky-700 underline underline-offset-4 hover:text-sky-800 cursor-pointer"
            onClick={(e) => {
              if (!redirectUrl) {
                e.preventDefault();
                console.log("No redirectUrl provided");
              }
            }}
          >
            Read More
          </a>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
}
