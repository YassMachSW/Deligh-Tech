import React from "react";
import Header from "./components/Header";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Header />
       {/* <AccessibilityWidget /> */}
      <main>
       {/* <AccessibilityWidget /> */}
        <WhyUs />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <footer className="footer" direction: rtl>© {new Date().getFullYear()} כל הזכויות שלמורות deligh-Tech</footer>
    </div>
  );
}
