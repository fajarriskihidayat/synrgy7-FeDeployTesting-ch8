const WhyUs = () => {
  return (
    <section id="why-us" className="container p-0">
      <h1
        className="title text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        Why Us?
      </h1>
      <p
        className="py-2 mb-3 mb-lg-4 text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="150"
        data-aos-duration="500"
      >
        Mengapa harus pilih Binar Car Rental?
      </p>
      <div className="row gap-lg-0">
        <div className="col-lg-3 col-sm-12">
          <div
            className="card card-why p-4"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img src="/images/icon_complete.png" alt="" />
            <h2>Mobil Lengkap</h2>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div
            className="card card-why p-4"
            data-aos="zoom-in"
            data-aos-delay="350"
            data-aos-duration="500"
          >
            <img src="/images/icon_price.png" alt="" />
            <h2>Harga Murah</h2>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div
            className="card card-why p-4"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <img src="/images/icon_24hrs.png" alt="" />
            <h2>Layanan 24 Jam</h2>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div
            className="card card-why p-4"
            data-aos="zoom-in"
            data-aos-delay="450"
            data-aos-duration="500"
          >
            <img src="/images/icon_professional.png" alt="" />
            <h2>Sopir Profesional</h2>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
