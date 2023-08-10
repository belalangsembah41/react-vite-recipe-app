import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import SectionImg from "../assets/section.png";
import MenuSection from "../components/MenuSection/MenuSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section style={styleSection}>
        <AboutSection />
        <img src={SectionImg} style={styleImg} alt="" />
        <MenuSection />
      </section>
      <Footer />
    </>
  );
};

const styleSection = {
  maxWidth: "1400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const styleImg = {
  width: "100%",
  maxWidth: "1270px",
  height: "400px",
  margin: "0 auto",
  borderRadius: "15px",
  opacity: "0.8",
  objectFit: "cover",
};

export default Home;
