import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Pricing from "../components/Pricing/Pricing";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
