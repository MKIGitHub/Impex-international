import React from 'react';
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import HeroSection from './HeroSection';

const About = () => {
  const { udpateAboutPage } = useGlobalContext()
  useEffect(() => udpateAboutPage(), []);
  return (
    <>
      <HeroSection />
      <h3>
        We are 1 decades serving all over India and outside India
      </h3>
    </>
  )
}

export default About