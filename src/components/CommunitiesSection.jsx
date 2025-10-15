import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const communityData = [
  { title: "TEAMS", link: "#" },
  { title: "MEMBERS", link: "#" },
  { title: "EVENTS", link: "#" },
];

export default function CommunitiesSection() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-100 py-12 px-6 text-white mt-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold">Our Communities</h2>
        <div className="border border-blue-300">
          <p className="mt-2 max-w-3xl mx-auto text-sm font-serif md:text-base">
            IEEE at NIT Patna is a big family with members from different states
            across India
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {communityData.map((item, index) => (
          <Card
            key={index}
            className="bg-white px-0 pb-0 text-center text-blue-700 font-serif shadow-lg rounded-3xl"
          >
            <CardContent className="flex flex-col items-center py-10 bg-cyan-100">
              <div className="w-52 h-52 flex items-center justify-center rounded-full bg-white mb-3 hover:bg-indigo-300 hover:text-white transition duration-200 ease-in-out">
                <span className="font-bold text-xl">{item.title}</span>
              </div>
              <Button asChild className="rounded-full text-blue-700 px-6 py-2">
                <a href={item.link}>View More</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}