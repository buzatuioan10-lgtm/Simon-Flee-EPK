import { motion } from 'framer-motion';

export const Hero = () => {
  const artistImage = "https://customer-assets.emergentagent.com/job_e9c00f10-4d6d-46ec-8080-48362e845430/artifacts/6umt9a91_8335143B-A6CB-4CB4-AC70-00D15E0F2918.JPG";

  return (
    <section data-testid="hero-section" className="section-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Typography */}
        <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#0A0A0A]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85]">
              <span className="block">Simon</span>
              <span className="block text-[#D1FF00] [-webkit-text-stroke:2px_#0A0A0A]">Flee</span>
            </h1>
            
            <div className="mt-8 space-y-2">
              <p className="font-mono text-sm uppercase tracking-widest text-[#A3A3A3]">
                DJ / Producer
              </p>
              <p className="font-mono text-sm uppercase tracking-widest text-[#A3A3A3]">
                Bucharest → Brussels
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden"
        >
          <img
            src={artistImage}
            alt="Simon Flee"
            data-testid="hero-image"
            className="w-full h-full object-cover img-grayscale"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent h-32 pointer-events-none" />
        </motion.div>
      </div>

      {/* Genre Marquee */}
      <div className="border-t border-[#0A0A0A] bg-[#0A0A0A] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 mr-8">
              <span className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">House</span>
              <span className="text-[#D1FF00]">◆</span>
              <span className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">Techno</span>
              <span className="text-[#D1FF00]">◆</span>
              <span className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">Breaks</span>
              <span className="text-[#D1FF00]">◆</span>
              <span className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">Acid</span>
              <span className="text-[#D1FF00]">◆</span>
              <span className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">Trance</span>
              <span className="text-[#D1FF00]">◆</span>
              <span className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">IDM</span>
              <span className="text-[#D1FF00]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
