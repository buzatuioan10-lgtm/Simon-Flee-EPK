import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, X, Image, Video } from 'lucide-react';

const mediaItems = [
  {
    type: 'image',
    title: 'Press Photo 1',
    thumbnail: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ya19586d_8335143B-A6CB-4CB4-AC70-00D15E0F2918.JPG',
    downloadUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ya19586d_8335143B-A6CB-4CB4-AC70-00D15E0F2918.JPG',
    filename: 'simon_flee_press_01.jpg'
  },
  {
    type: 'image',
    title: 'Press Photo 2',
    thumbnail: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ijvabzkm_FCC94E21-57D5-40AC-A8BE-1EFE5C75EA9E.JPG',
    downloadUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ijvabzkm_FCC94E21-57D5-40AC-A8BE-1EFE5C75EA9E.JPG',
    filename: 'simon_flee_press_02.jpg'
  },
  {
    type: 'image',
    title: 'Press Photo 3',
    thumbnail: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/xq6p0045_8CDBA0BE-D10E-42A7-8735-88D1CDF7B41B.JPG',
    downloadUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/xq6p0045_8CDBA0BE-D10E-42A7-8735-88D1CDF7B41B.JPG',
    filename: 'simon_flee_press_03.jpg'
  },
  {
    type: 'video',
    title: 'Rewind Reel 1',
    videoUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ycob3aec_reel%20rewind%203.mp4',
    downloadUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ycob3aec_reel%20rewind%203.mp4',
    filename: 'simon_flee_reel_01.mp4'
  },
  {
    type: 'video',
    title: 'Rewind Reel 2',
    videoUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ra5efl9g_reel%20rewind%204.mp4',
    downloadUrl: 'https://customer-assets.emergentagent.com/job_simon-music-kit/artifacts/ra5efl9g_reel%20rewind%204.mp4',
    filename: 'simon_flee_reel_02.mp4'
  }
];

const MediaCard = ({ item, onPreview }) => {
  const handleDownload = async (e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = item.downloadUrl;
    link.download = item.filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-[#0A0A0A] group cursor-pointer"
      onClick={() => onPreview(item)}
      data-testid={`media-${item.type}-${item.title.toLowerCase().replace(/\s/g, '-')}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
        {item.type === 'video' ? (
          <video
            src={item.videoUrl}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover img-grayscale group-hover:filter-none transition-all duration-300"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
            {item.type === 'video' && (
              <div className="w-12 h-12 bg-[#D1FF00] flex items-center justify-center">
                <Play className="w-5 h-5 text-[#0A0A0A]" />
              </div>
            )}
            {item.type === 'image' && (
              <div className="w-12 h-12 bg-[#F2F2F2] flex items-center justify-center">
                <Image className="w-5 h-5 text-[#0A0A0A]" />
              </div>
            )}
          </div>
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#0A0A0A] text-[#F2F2F2] px-2 py-1 font-mono text-xs uppercase tracking-widest flex items-center gap-1">
            {item.type === 'video' ? <Video className="w-3 h-3" /> : <Image className="w-3 h-3" />}
            {item.type}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex items-center justify-between border-t border-[#0A0A0A]">
        <p className="font-mono text-sm">{item.title}</p>
        <button
          onClick={handleDownload}
          className="w-8 h-8 border border-[#0A0A0A] flex items-center justify-center hover:bg-[#D1FF00] transition-colors"
          data-testid={`download-${item.filename}`}
        >
          <Download className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const PreviewModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="media-preview-modal"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-[#F2F2F2] flex items-center justify-center hover:bg-[#D1FF00] transition-colors"
        data-testid="close-preview"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
        {item.type === 'image' ? (
          <img
            src={item.downloadUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            src={item.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <p className="font-mono text-sm text-[#F2F2F2]">{item.title}</p>
          <a
            href={item.downloadUrl}
            download={item.filename}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const MediaGallery = () => {
  const [previewItem, setPreviewItem] = useState(null);

  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');

  return (
    <>
      <section data-testid="media-section" className="section-border p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[#D1FF00]" />
            Media
          </h2>

          <p className="font-mono text-sm text-[#A3A3A3] mb-8 uppercase tracking-widest">
            Press photos & video clips — Click to preview, download for use
          </p>

          {/* Photos */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-4 flex items-center gap-2">
              <Image className="w-4 h-4" />
              Photos ({images.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {images.map((item) => (
                <MediaCard key={item.filename} item={item} onPreview={setPreviewItem} />
              ))}
            </div>
          </div>

          {/* Videos */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] mb-4 flex items-center gap-2">
              <Video className="w-4 h-4" />
              Video Clips ({videos.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {videos.map((item) => (
                <MediaCard key={item.filename} item={item} onPreview={setPreviewItem} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Preview Modal */}
      {previewItem && (
        <PreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
      )}
    </>
  );
};
