import React from "react";
import { motion } from "framer-motion";
import founder from "../assets/founder.jpg"; // put founder.jpg here

export default function About() {
  return (
    <section className="container about">
      <motion.img
        src={founder}
        alt="מייסדת - יסמין משעור"
        className="about-img"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div className="about-text" initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="about-title">מי אנחנו</h2>
        <p className="about-p">
          Deligh-Tech נוסדה על ידי יסמין משעור — יזמת בתחום הפיתוח והעיצוב הדיגיטלי. המיקוד שלנו הוא לשלב
          עיצוב נקי, חוויית משתמש חזקה ונגישות בכל פרויקט. אנו בונים נכסים דיגיטליים שמייצרים תוצאות ומותאמים לכל לקוח.
        </p>
      </motion.div>
    </section>
  );
}
