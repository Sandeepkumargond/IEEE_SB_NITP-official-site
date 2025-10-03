"use client";

import Link from "next/link";

export default function BlogCard({ title, excerpt, date, href }) {
  return (
    <div className="rounded-3xl bg-white/90 shadow-md backdrop-blur-sm transition hover:shadow-lg">
      <div className="h-6 rounded-t-3xl bg-sky-600" />
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight">{title}</h3>
        <p className="mt-4 text-gray-700 max-w-xs">{excerpt}</p>
        <Link
          href={href ?? "#"}
          className="mt-2 inline-block text-sky-700 underline underline-offset-4 hover:text-sky-800"
        >
          Read More
        </Link>
        <p className="mt-6 text-gray-600">{date}</p>
      </div>
    </div>
  );
}


