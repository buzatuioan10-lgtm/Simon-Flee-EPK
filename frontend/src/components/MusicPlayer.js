import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const PlayerCard = ({ title, subtitle, embedUrl, platform }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="border border-[#0A0A0A]">
      {/* Header */}
      <div className="p-4 border-b border-[#0A0A0A] bg-[#E5E5E5]">
        <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">{platform}</p>
        <h3 className="font-bold text-lg mt-1">{title}</h3>
        {subtitle && <p className="font-mono text-sm text-[#A3A3A3] mt-1">{subtitle}</p>}
      </div>

      {/* Player Area */}
      <div className="relative h-[300px] bg-[#0A0A0A]">
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10"
              onClick={() => setIsRevealed(true)}
              data-testid={`player-cover-${platform.toLowerCase()}`}
            >
              <div className="w-20 h-20 border-2 border-[#D1FF00] flex items-center justify-center mb-4 hover:bg-[#D1FF00] hover:border-[#D1FF00] transition-colors group">
                <Play className="w-8 h-8 text-[#D1FF00] group-hover:text-[#0A0A0A] transition-colors" />
              </div>
              <p className="font-mono text-sm uppercase tracking-widest text-[#F2F2F2]">Click to Load</p>
            </motion.div>
          )}
        </AnimatePresence>

        {isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <iframe
              title={title}
              width="100%"
              height="100%"
              src={embedUrl}
              frameBorder="0"
              allow="autoplay"
              style={{ border: 'none' }}
              data-testid={`player-embed-${platform.toLowerCase()}`}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const MusicPlayer = () => {
  const players = [
    {
      platform: 'Mixcloud',
      title: 'New Selections Vol. 1',
      subtitle: 'Showcase Mix',
      embedUrl: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsimonflee%2Fnew-selections-vol-1%2F'
    },
    {
      platform: 'SoundCloud',
      title: 'Unreleased Playlist',
      subtitle: 'Original Productions',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/simon-flee/sets/unreleased&color=%23d1ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false'
    }
  ];

  return (
    <section data-testid="music-section" className="section-border p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#D1FF00]" />
          Listen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.platform} {...player} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
