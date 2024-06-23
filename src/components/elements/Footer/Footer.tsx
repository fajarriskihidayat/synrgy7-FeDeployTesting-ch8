const Footer = () => {
  return (
    <>
      <div className="address d-flex flex-column gap-3">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="d-flex flex-column gap-3">
        <a href="#our-services">Our services</a>
        <a href="#why-us">Why Us</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">FAQ</a>
      </div>
      <div>
        <p>Connect with us</p>
        <div className="d-flex gap-3">
          <img src="/images/icon_facebook.png" alt="fb" />
          <img src="/images/icon_instagram.png" alt="ig" />
          <img src="/images/icon_twitter.png" alt="twitter" />
          <img src="/images/icon_mail.png" alt="email" />
          <img src="/images/icon_twitch.png" alt="twitch" />
        </div>
      </div>
      <div>
        <p>Copyright Binar 2022</p>
        <div className="box"></div>
      </div>
    </>
  );
};

export default Footer;
