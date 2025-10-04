import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  href?: string; // dummy link that can be updated later
}

export function EventCard({ title, imageUrl, className, href = "#" }: EventCardProps) {
  return (
    <div className={cn(
      "w-[316px] h-[401px] bg-white rounded-xl shadow-[4px_12px_4px_0_rgba(0,0,0,0.25)] flex flex-col",
      className
    )}>
      {/* Event Image */}
      <div className="flex justify-center pt-7 pb-3">
        <img 
          src={imageUrl}
          alt={title}
          className="w-[255px] h-[255px] rounded-xl object-cover"
        />
      </div>

      {/* Event Title */}
      <div className="flex justify-center px-9 pb-3">
        <h3 className="text-black text-base font-semibold text-center leading-normal">
          {title}
        </h3>
      </div>

      {/* View Details Link (dummy) */}
      <div className="flex justify-center px-[61px] pb-8">
        <a
          href={href}
          onClick={(e) => { if (href === "#") e.preventDefault(); }}
          className="w-[194px] h-[49px] bg-ieee-primary rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-ieee-primary/90 transition-colors"
        >
          <span className="text-white text-base font-semibold">View details</span>
        </a>
      </div>
    </div>
  );
}
