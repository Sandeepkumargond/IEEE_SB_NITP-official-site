import CommunityCard from "./ui/CommunityCard";

export default function SocietiesSection() {
  const cards = [
    {
      iconSrc: "/brain3.jpg",
      title: "Business Ideas",
      description:
        "Societies collaborate to address interdisciplinary challenges and advance emerging technologies through technical councils.",
    },
    {
      iconSrc: "/bulblogo.jpg",
      title: "Young Professionals",
      description:
        "Societies collaborate to address interdisciplinary challenges and advance emerging technologies through technical councils.",
    },
    {
      iconSrc: "/technical.jpg",
      title: "Technical Council",
      description:
        "Societies collaborate to address interdisciplinary challenges and advance emerging technologies through technical councils.",
    },
  ];

  return (
    <section className="bg-[#DDF5FC] py-16 px-6 md:px-16 border-t-10 from border-t-violet-700 ">
      {/* Header */}
      <div className="text-center mb-12 ">
        <div className="rounded-full bg-purple-300 py-3"> 
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2A2A72] bg-gradient-to-r from-purple-800 to-blue-600 inline-block text-transparent bg-clip-text">
          Societies, Councils, and Communities
        </h2></div>
       
        <p className="text-[#1a1a1a] mt-4 font-serif text-bold text-violet-600 md:text-lg max-w-3xl mx-auto">
          Whether you want to network locally where you live or collaborate with
          colleagues in your technical field across the globe, here are some of
          the IEEE communities that can help you connect.
        </p>

        <button className="mt-6 px-10 py-2 border-2 border-purple-600 text-purple-700 rounded-md font-bold hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-white transition-all font-semibold">
          Explore more
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <CommunityCard
            key={index}
            iconSrc={card.iconSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}