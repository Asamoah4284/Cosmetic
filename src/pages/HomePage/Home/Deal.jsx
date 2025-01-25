import AOS from 'aos';
import 'aos/dist/aos.css';

function Deal() {
  return <div>
    <div className="tm-section tm-offer-area tm-padding-section bg-grey" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 order-2 order-lg-1" data-aos="fade-left" data-aos-delay="100">
            <div className="tm-offer-left">
              <h1 className="font-bold">Deal of the Month</h1>
              <h3>Get <span>40%</span> discount</h3>
              <p>Don't miss out on our exclusive Deal of the Month! Enjoy a fantastic 40% discount on selected items. Shop now and save big! This offer is valid for a limited time only, so hurry and grab your favorites before they're gone!</p>
              <a href="tel:+233554406438" className="tm-button">Shop Now</a>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-1 order-lg-2" data-aos="fade-right" data-aos-delay="400">
            <div className="tm-offer-right">
              <img src="/images/product.jpeg" alt="offer image" className="md:w-[500px] md:h-[400px] md:object-cover"/>
              <div className="tm-countdown" data-countdown="2020/01/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Deal

