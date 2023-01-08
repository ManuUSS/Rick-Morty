import { useEffect } from "react";
import { getAllCharacters } from "../apis/getCharacters";
import { ContextSection } from "../components/contextSection/ContextSection";
import { HeroImage } from "../components/hero/HeroImage";
import { HeroSection } from "../components/hero/HeroSection";
import { Footer } from "../components/shared/Footer";
import { NavMenu } from "../components/shared/NavMenu";

export const HomePage = () => {
    

  return (
    <>
      <HeroSection />
      <ContextSection />
      <Footer />
    </>
  )
}
