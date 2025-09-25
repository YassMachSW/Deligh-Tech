import React from "react";
import { Instagram, Phone } from "lucide-react";
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
          href="https://instagram.com/delightech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="לינק לאינסטגרם"
        >
          <Instagram size={22} />
        </a>

        <a className="icon-btn phone" href="tel:+972545317545" aria-label="התקשר">
          <Phone size={22} />
        </a>
      </div>
    </section>
  );
}
