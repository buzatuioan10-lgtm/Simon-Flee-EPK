import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';

export const TechRider = () => {
  const equipment = [
    { item: '2x CDJ (3000 / 2000NXS2)', required: true },
    { item: '1x 4-Channel Mixer', required: true },
    { item: '3rd CDJ', required: false }
  ];

  return (
    <section data-testid="tech-rider-section" className="section-border p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#D1FF00]" />
          Tech Rider
        </h2>

        <div className="border border-[#0A0A0A]">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#E5E5E5] border-b border-[#0A0A0A]">
            <div className="col-span-8 p-4 border-r border-[#0A0A0A]">
              <p className="font-mono text-xs uppercase tracking-widest font-semibold">Equipment</p>
            </div>
            <div className="col-span-4 p-4">
              <p className="font-mono text-xs uppercase tracking-widest font-semibold">Status</p>
            </div>
          </div>

          {/* Table Body */}
          {equipment.map((item, index) => (
            <div
              key={item.item}
              className={`grid grid-cols-12 ${index !== equipment.length - 1 ? 'border-b border-[#0A0A0A]' : ''}`}
            >
              <div className="col-span-8 p-4 border-r border-[#0A0A0A]">
                <p className="font-mono text-base">{item.item}</p>
              </div>
              <div className="col-span-4 p-4 flex items-center gap-2">
                {item.required ? (
                  <>
                    <Check className="w-4 h-4 text-[#0A0A0A]" />
                    <span className="font-mono text-sm uppercase tracking-widest">Required</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-[#A3A3A3]" />
                    <span className="font-mono text-sm uppercase tracking-widest text-[#A3A3A3]">Optional</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-6 p-4 border-l-4 border-[#D1FF00] bg-[#E5E5E5]">
          <p className="font-mono text-sm leading-relaxed">
            <span className="font-bold">Note:</span> The artist is able to adapt to club equipment. 
            Please inform the artist in advance if the gear differs from the preferred setup to ensure full compatibility.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
