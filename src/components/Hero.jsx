import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/10 " />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 font-serif">
        <h1 className="text-3xl md:text-5xl font-bold mt-28">
          Communities & Connection
        </h1>
        <p className="mt-5 text-sm md:text-lg max-w-2xl mx-auto">
          At IEEE, our members connect across disciplines and
        </p>
        <p className="mt-1 text-sm md:text-lg max-w-2xl mx-auto">
          time zones to collaborate, build, and solve together.
        </p>
      </div>
    </section>
  );
}