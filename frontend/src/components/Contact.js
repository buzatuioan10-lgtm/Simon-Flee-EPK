import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Instagram } from 'lucide-react';

export const Contact = () => {
  const contacts = [
    {
      icon: Phone,
      label: 'Phone (BE)',
      value: '+32 (471) 38 70 65',
      href: 'tel:+32471387065'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+40 (785) 596 177',
      href: 'https://wa.me/40785596177'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'simonflee0@gmail.com',
      href: 'mailto:simonflee0@gmail.com'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@johnny_lipmann',
      href: 'https://www.instagram.com/johnny_lipmann/'
    }
  ];

  return (
    <section data-testid="contact-section" className="p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#D1FF00]" />
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-testid={`contact-${contact.label.toLowerCase().replace(/[^a-z]/g, '')}`}
                className="contact-cell flex items-center gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 border border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors">
                  <Icon className="w-5 h-5 group-hover:text-[#D1FF00] transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] group-hover:text-[#0A0A0A]/70 transition-colors">
                    {contact.label}
                  </p>
                  <p className="font-bold text-lg">{contact.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
