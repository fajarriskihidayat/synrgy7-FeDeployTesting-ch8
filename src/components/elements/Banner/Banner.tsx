import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner" className="container">
      <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="500">
        Sewa Mobil di (Lokasimu) Sekarang
      </h1>
      <p data-aos="fade-down" data-aos-delay="150" data-aos-duration="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link
        className="btn text-light"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="500"
        to="/cars"
      >
        Mulai Sewa Mobil
      </Link>
    </section>
  );
};

export default Banner;
