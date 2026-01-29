import Hero from "./components/Hero";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
}
