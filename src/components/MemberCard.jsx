"use client";

export default function MemberCard({ name, role, image, socials }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl bg-slate-100">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{role}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        {socials?.twitter && (
          <a aria-label="Twitter" href={socials.twitter} className="grid h-9 w-9 place-items-center rounded-full bg-sky-600 text-white">t</a>
        )}
        {socials?.linkedin && (
          <a aria-label="LinkedIn" href={socials.linkedin} className="grid h-9 w-9 place-items-center rounded-full bg-sky-600 text-white">in</a>
        )}
        {socials?.email && (
          <a aria-label="Email" href={socials.email} className="grid h-9 w-9 place-items-center rounded-full bg-sky-600 text-white">@</a>
        )}
      </div>
    </div>
  );
}



