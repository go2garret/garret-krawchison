import Hero from "./components/Hero";
import StackSection from "./components/StackSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StackSection />
      <ExperienceSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
