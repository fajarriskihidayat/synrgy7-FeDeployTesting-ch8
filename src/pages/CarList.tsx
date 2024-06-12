import FilterCar from "../components/elements/FilterCar/FilterCar";
import Footer from "../components/elements/Footer/Footer";
import Hero from "../components/elements/Hero/Hero";
import Navbar from "../components/elements/Navbar/Navbar";

const CarList = () => {
  return (
    <>
      <header style={{ backgroundColor: "#f1f3ff", padding: "0" }}>
        <Navbar />
        <Hero />
      </header>
      <main>
        <FilterCar />
      </main>
      <footer className="container d-flex">
        <Footer />
      </footer>
    </>
  );
};

export default CarList;
