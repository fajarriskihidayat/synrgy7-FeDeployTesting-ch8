import Banner from "../components/elements/Banner/Banner";
import FAQ from "../components/elements/FAQ/FAQ";
import Footer from "../components/elements/Footer/Footer";
import Hero from "../components/elements/Hero/Hero";
import Navbar from "../components/elements/Navbar/Navbar";
import OurServices from "../components/elements/OurServices/OurServices";
import Testimonial from "../components/elements/Testimonial/Testimonial";
import WhyUs from "../components/elements/WhyUs/WhyUs";

const LandingPage = () => {
  return (
    <>
      <header style={{ backgroundColor: "#f1f3ff", padding: "0" }}>
        <Navbar />
        <Hero />
      </header>
      <main>
        <OurServices />
        <WhyUs />
        <Testimonial />
        <Banner />
        <FAQ />
      </main>
      <footer className="container d-flex">
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
