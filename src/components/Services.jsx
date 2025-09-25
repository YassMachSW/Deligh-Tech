import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  { title: "בניית אתרים", text: "פיתוח אתרים רספונסיביים מותאמים אישית לעסק שלך. כולל נגישות, SEO ומהירות טעינה." },
  { title: "עיצוב UX/UI", text: "עיצוב חוויית משתמש מותאם לקהלי יעד, אבטיפוס ואפיון עד למסירת ממשק עובד." },
  { title: "תחזוקה ותמיכה", text: "חבילות תחזוקה, עדכוני אבטחה ושדרוגים שוטפים כדי לשמור על האתר בריא ומעודכן." },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open !== null) {
      const el = document.getElementById(`service-${open}`);
      if (el) {
        // small timeout to allow content to render then scroll
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }
    }
  }, [open]);

  return (
    <section className="container">
      <motion.h2 className="services-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        השירותים שלנו
      </motion.h2>

      <div className="services-list" role="list">
        {services.map((s, i) => (
          <div className="service-card" key={i} id={`service-${i}`}>
            <button
              className="service-button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{s.title}</span>
              <span style={{ fontSize: 22 }}>{open === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  className="service-content"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  <p>{s.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
