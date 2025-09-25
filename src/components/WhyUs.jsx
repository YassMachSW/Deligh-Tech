import React from "react";
import { motion } from "framer-motion";

const items = [
  "נגישות מלאה לפי תקן",
  "עיצוב מודרני וחווית משתמש מעולה",
  "פתרונות מותאמים אישית לעסק שלך",
];

export default function WhyUs() {
  return (
    <section className="container">
      <motion.h2 className="why-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        למה <span style={{ color: "var(--accent1)" }}>Deligh-Tech</span>?
      </motion.h2>

      <ul className="why-list" aria-label="רשימת יתרונות">
        {items.map((t, i) => (
          <motion.li
            className="why-item"
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 * i }}
          >
            <span style={{ fontSize: 18 }}>{t}</span>
            <span style={{ opacity: 0.9 }}>✅</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
