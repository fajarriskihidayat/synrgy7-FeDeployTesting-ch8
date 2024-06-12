const FAQ = () => {
  return (
    <section id="faq" className="container">
      <div className="row">
        <div className="title-faq col-lg-5 col-sm-12">
          <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="500">
            Frequently Asked Question
          </h1>
          <p data-aos="zoom-in" data-aos-delay="150" data-aos-duration="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="col-lg-7 col-sm-12">
          <div
            className="accordion d-flex gap-3 flex-column"
            id="accordionExample"
          >
            <div
              className="accordion-item"
              data-aos="flip-up"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  maiores quibusdam esse optio magni in laudantium. Voluptatum
                  aspernatur animi fugit commodi rerum itaque. Aut, voluptatum
                  ipsam tempora excepturi consectetur optio.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  maiores quibusdam esse optio magni in laudantium. Voluptatum
                  aspernatur animi fugit commodi rerum itaque. Aut, voluptatum
                  ipsam tempora excepturi consectetur optio.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              data-aos="flip-up"
              data-aos-delay="350"
              data-aos-duration="500"
            >
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, sint itaque, quam esse dignissimos numquam culpa
                  minima facere sequi quasi neque accusamus dolor accusantium
                  hic nam blanditiis. Voluptatibus, consectetur laudantium.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              data-aos="flip-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, sint itaque, quam esse dignissimos numquam culpa
                  minima facere sequi quasi neque accusamus dolor accusantium
                  hic nam blanditiis. Voluptatibus, consectetur laudantium.
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              data-aos="flip-up"
              data-aos-delay="450"
              data-aos-duration="500"
            >
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, sint itaque, quam esse dignissimos numquam culpa
                  minima facere sequi quasi neque accusamus dolor accusantium
                  hic nam blanditiis. Voluptatibus, consectetur laudantium.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
