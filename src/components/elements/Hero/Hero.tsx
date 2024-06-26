import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <section id="hero" className="p-0">
        <div
          className="row align-items-lg-center"
          style={{ paddingTop: "72px" }}
        >
          <div className="left col-lg-6 col-sm-12">
            <h1
              className="mt-2 m-0"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="50"
            >
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p
              className="my-3"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="100"
            >
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link
              className="btn text-light mb-4"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="150"
              to="/cars"
            >
              Mulai Sewa Mobil
            </Link>
          </div>
          <div
            className="right col-lg-6 col-sm-12"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="0"
          >
            <img src="/images/img_car.png" alt="Car" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
