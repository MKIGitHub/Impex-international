import { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from "./HeroSection";
import Products from "./Products";
import Contact from "./Contact";

const Home = () => {
  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Products />
      <Contact />
    </>
  );
};

export default Home;
