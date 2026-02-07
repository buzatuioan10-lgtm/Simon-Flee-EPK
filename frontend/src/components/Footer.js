import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="border-t border-[#0A0A0A] p-6 bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
          © {currentYear} Simon Flee — All Rights Reserved
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
          Bucharest → Brussels
        </p>
      </motion.div>
    </footer>
  );
};
