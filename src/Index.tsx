import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections: { [key: string]: React.ReactNode } = {
    home: <Hero />,
    services: <Services />,
    work: <Work />,
    about: <About />,
    contact: <Contact />,
  };

  return (
    <>
      <Navigation
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      <main>
        {/* Render only the active section */}
        {sections[activeSection]}
      </main>
    </>
  );
};

export default Index;