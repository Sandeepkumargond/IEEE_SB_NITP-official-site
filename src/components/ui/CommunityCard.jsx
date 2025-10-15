import Image from "next/image";
export default function CommunityCard({ iconSrc, title, description }) {
  return (
    <div className="bg-[#C4F1F9] rounded-2xl font-serif shadow-lg text-center py-10 px-6 border-t-8 border-t-violet-600 bhover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-4">
        {iconSrc ? (
        <Image  src= {iconSrc} alt = {title} width={60} height ={60} />
        ):(
          <div className="text -5xl"></div>
        )}
      
      </div>
      <h3 className="text-xl font-semibold text-[#2A2A72] mb-3">{title}</h3>
      <p className="text-sm text-gray-700 mb-6">{description}</p>
      <button className="bg-white text-black shadow px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
        View More
      </button>
    </div>
  );
}