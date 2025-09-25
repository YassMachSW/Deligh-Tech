import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // put your logo here

export default function Header() {
  return (
    <header className="header">
      <motion.div className="logo" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
        <img src={logo} alt="Deligh-Tech Logo" />
      </motion.div>

      <motion.h1 className="h1" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Deligh-Tech
      </motion.h1>

      <motion.p className="subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        פיתוח נכסים דיגיטליים מונגשים
      </motion.p>
    </header>
  );
}
