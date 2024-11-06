"use client";
import { useEffect } from "react";
import Aos from "aos";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verifica si está en el lado del cliente
      Aos.init({
        duration: 1200,
        offset: 100,
      });
      Aos.refresh();

      // Añade el event listener al scroll solo en el lado del cliente
      const handleScroll = () => {
        Aos.refresh();
      };

      window.addEventListener("scroll", handleScroll);

      // Limpia el event listener al desmontar el componente
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <Hero />
    </>
  );
}
