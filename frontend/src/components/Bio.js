import { motion } from 'framer-motion';

export const Bio = () => {
  return (
    <section data-testid="bio-section" className="section-border p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#D1FF00]" />
          Bio
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Bio */}
          <div className="lg:col-span-8">
            <p className="font-mono text-base md:text-lg leading-relaxed text-[#0A0A0A] mb-6">
              Simon Flee is a Bucharest-born DJ and producer currently based in Brussels. His selections sit between{' '}
              <span className="genre-tag">house</span>, <span className="genre-tag">techno</span>, and{' '}
              <span className="genre-tag">breaks</span>, drawing from the left field of club music with touches of{' '}
              <span className="genre-tag">acid</span>, <span className="genre-tag">trance</span>, and{' '}
              <span className="genre-tag">IDM</span>, shaped into focused, groovy sets.
            </p>
            
            <p className="font-mono text-base md:text-lg leading-relaxed text-[#0A0A0A] mb-6">
              Rather than staying within fixed genres, he builds long-form narratives on the dancefloor, 
              prioritising tension and progression while allowing unexpected shifts in style.
            </p>

            <p className="font-mono text-base md:text-lg leading-relaxed text-[#0A0A0A] mb-6">
              Coming from years of playing (and later founding) punk and alternative bands, his sets retain 
              a performative, high-risk, high-reward energy rather than a passive selector approach.
            </p>

            <p className="font-mono text-base md:text-lg leading-relaxed text-[#0A0A0A]">
              His background includes experimental music studies in the UK and work on sound and music for 
              film productions, which shaped his open-form thinking, taste, and artistic decisions.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="lg:col-span-4 lg:border-l border-[#0A0A0A] lg:pl-8">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-2">Based in</p>
                <p className="font-bold text-xl">Brussels, BE</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-2">From</p>
                <p className="font-bold text-xl">Bucharest, RO</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-2">Style</p>
                <p className="font-bold text-xl">Leftfield Club Music</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-2">Background</p>
                <p className="font-bold text-xl">Punk / Experimental / Film</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
