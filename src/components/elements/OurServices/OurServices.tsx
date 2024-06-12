const OurServices = () => {
  return (
    <section id="our-services" className="container">
      <div className="row">
        <div
          className="left col-lg-6 col-sm-12"
          data-aos="flip-left"
          data-aos-duration="500"
        >
          <img src="/assets/img_service.png" alt="Our Services" />
        </div>
        <div className="right col-lg-6 col-sm-12 p-0">
          <h1 className="pt-4" data-aos="fade-left" data-aos-delay="100">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h1>
          <p className="py-3 m-0" data-aos="fade-left" data-aos-delay="200">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div>
            <div className="list" data-aos="fade-left" data-aos-delay="300">
              <img src="/assets/Group_53.png" alt="Check" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
            <div className="list" data-aos="fade-left" data-aos-delay="400">
              <img src="/assets/Group_53.png" alt="Check" />
              <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
            </div>
            <div className="list" data-aos="fade-left" data-aos-delay="500">
              <img src="/assets/Group_53.png" alt="Check" />
              <span>Sewa Mobil Jangka Panjang Bulanan</span>
            </div>
            <div className="list" data-aos="fade-left" data-aos-delay="600">
              <img src="/assets/Group_53.png" alt="Check" />
              <span>Gratis Antar - Jemput Mobil di Bandara</span>
            </div>
            <div className="list" data-aos="fade-left" data-aos-delay="700">
              <img src="/assets/Group_53.png" alt="Check" />
              <span>Layanan Airport Transfer / Drop In Out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
