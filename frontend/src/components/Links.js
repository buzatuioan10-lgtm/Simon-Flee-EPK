import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Links = () => {
  const links = [
    {
      label: 'SoundCloud',
      url: 'https://soundcloud.com/simon-flee',
      description: 'Productions & Unreleased'
    },
    {
      label: 'Mixcloud',
      url: 'https://www.mixcloud.com/simonflee/',
      description: 'DJ Mixes & Sets'
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/watch?v=qSu8moV3ZZA',
      description: 'Rewind Bucharest Open Decks'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/johnny_lipmann/',
      description: '@johnny_lipmann'
    },
    {
      label: 'Linktree',
      url: 'https://linktr.ee/simonflee0',
      description: 'All Links'
    }
  ];

  return (
    <section data-testid="links-section" className="section-border p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#D1FF00]" />
          Links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-${link.label.toLowerCase()}`}
              className="border border-[#0A0A0A] p-6 flex flex-col justify-between min-h-[140px] group hover:bg-[#D1FF00] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-xl uppercase tracking-tight">{link.label}</h3>
                <ExternalLink className="w-5 h-5 text-[#A3A3A3] group-hover:text-[#0A0A0A] transition-colors" />
              </div>
              <p className="font-mono text-sm text-[#A3A3A3] group-hover:text-[#0A0A0A]/70 transition-colors">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
