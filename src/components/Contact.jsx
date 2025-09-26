import React from "react";
import { Instagram, Phone,MessageCircle  } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container">
      <motion.h2 className="contact-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        צור קשר
      </motion.h2>

      <div className="contact-actions">
        <a
          className="icon-btn instagram"
          href="instagram://user?username=deligh_tech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="לינק לאינסטגרם"
        >
          <Instagram size={22} />
        </a>
<a
        className="icon-btn whatsapp"
        href="https://wa.me/972545317545"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שלח הודעה בוואטסאפ"
      >
        <MessageCircle size={22} />
      </a>

        <a className="icon-btn phone" href="tel:+972545317545" aria-label="התקשר">
          <Phone size={22} />
        </a>

        
      </div>
    </section>
  );
}
