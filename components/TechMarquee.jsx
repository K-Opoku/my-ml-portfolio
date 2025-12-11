export default function TechMarquee({ tags }) {
  // If tags is null (from Sanity) or undefined, use an empty array
  const safeTags = tags || [];

  const defaultTags = [
    "Python", "PyTorch", "TensorFlow", "AWS", "Docker", 
    "Kubernetes", "FastAPI", "Git", "Kserve", "HuggingFace"
  ];
  
  // If the user hasn't added any tags in Studio yet, show the defaults
  const items = safeTags.length > 0 ? safeTags : defaultTags;

  // We duplicate the list to create a seamless infinite loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-10 bg-slate-950/50 border-y border-white/5 backdrop-blur-sm">
      <div className="relative flex items-center">
        
        {/* Fades on the sides to make it look smooth */}
        <div className="absolute left-0 z-10 w-20 h-full bg-gradient-to-r from-[#0F0F10] to-transparent pointer-events-none" />
        <div className="absolute right-0 z-10 w-20 h-full bg-gradient-to-l from-[#0F0F10] to-transparent pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="mx-6 text-lg font-medium text-slate-400 flex items-center gap-2 uppercase tracking-wider"
            >
              <span className="text-indigo-500/50 text-xs">●</span> 
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}