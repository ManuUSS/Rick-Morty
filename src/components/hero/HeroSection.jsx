import { HeroImage } from "./HeroImage";
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
        <h1 className="hero-section__header animate__animated animate__jackInTheBox">Rick & Morty</h1>
        <HeroImage />
    </section>
  )
}
