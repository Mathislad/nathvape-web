import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Boutique from "@/components/Boutique";
import Produits from "@/components/Produits";
import Pourquoi from "@/components/Pourquoi";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Boutique />
        <Produits />
        <Pourquoi />
        <Contact />
      </main>
    </>
  );
}
