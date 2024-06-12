const Testimonial = () => {
  return (
    <section id="testimonial" className="text-center">
      <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="500">
        Testimonial
      </h1>
      <span data-aos="fade-down" data-aos-delay="150" data-aos-duration="500">
        Berbagai review positif dari para pelanggan kami
      </span>
      <div className="card d-flex flex-row gap-lg-4 border-0 owl-carousel owl-theme">
        <div
          className="card-item shadow-sm"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <img
            src="/assets/img_photo.png"
            alt="testi"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="text-start ms-lg-5">
            <img
              src="/assets/Rate.png"
              alt="rate"
              style={{ width: "80px", height: "16px" }}
            />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <span>John Dee 32, Bromo</span>
          </div>
        </div>
        <div
          className="card-item shadow-sm"
          data-aos="flip-left"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <img
            src="/assets/img_photo2.png"
            alt="testi"
            style={{ width: "80px", height: "80px", borderRadius: "100px" }}
          />
          <div className="text-start ms-lg-5">
            <img
              src="/assets/Rate.png"
              alt="rate"
              style={{ width: "80px", height: "16px" }}
            />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <span>John Dee 32, Bromo</span>
          </div>
        </div>
        <div
          className="card-item shadow-sm"
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <img
            src="/assets/img_photo.png"
            alt="testi"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="text-start ms-lg-5">
            <img
              src="/assets/Rate.png"
              alt="rate"
              style={{ width: "80px", height: "16px" }}
            />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <span>John Dee 32, Bromo</span>
          </div>
        </div>
      </div>
      <div className="arrow d-flex flex-row justify-content-center gap-4">
        <div className="bg customPrevBtn">
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="bg next customNextBtn">
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
