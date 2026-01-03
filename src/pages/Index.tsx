import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prism Devs | Expert Web Development Team</title>
        <meta
          name="description"
          content="Prism Devs is a passionate team of developers and designers creating high-performance websites and applications. Get custom web solutions tailored to your business needs."
        />
        <meta name="keywords" content="web development, web design, react, frontend, backend, full stack, mobile apps" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Team />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
