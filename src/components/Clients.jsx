import React from "react";
import { motion } from "framer-motion";

/*
 Place client logos in /public as c1.png, c2.png, ... 
 We'll duplicate the array to make the marquee seamless.
*/

const logos = ["/c1.png", "/c2.png", "/c3.png", "/c4.png"];

export default function Clients() {
  const loop = [...logos, ...logos]; // duplicate for continuous scroll

  return (
    <section className="container">
      <motion.h2 className="clients-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        הלקוחות שלנו
      </motion.h2>

      <div className="clients-wrap" aria-hidden={false}>
        <div className="marquee" role="list">
          {loop.map((src, i) => (
            <img key={i} src={src} alt={`client-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
