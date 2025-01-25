function Hero() {
  return (
    // Heroslider Area wrapper
    <div className="tm-heroslider-area relative">
      {/* Heroslider Item */}
      <div className="tm-heroslider background bg-cover bg-center bg-no-repeat min-h-[70vh] md:min-h-screen">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="tm-heroslider-contentwrapper" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <div className="tm-heroslider-content">
                  <h1 className="font-[900]">A thing of beauty is a joy forever for women</h1>
                  <p>The experience of beauty often involves an interpretation of some
                    entity as being in balance.</p>
                  <button id="services" className="tm-button inline-block"><a href="#tm-service-area">Read More</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="tm-heroslider-social">
        <li><a href="#" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary inline-block" title="facebook"><ion-icon name="logo-facebook"></ion-icon></a>
          <span className="tm-heroslider-social-tooltip">Facebook</span>
        </li>
        <li><a href="#" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary inline-block" title="twitter"><ion-icon name="logo-twitter"></ion-icon></a>
          <span className="tm-heroslider-social-tooltip">Twitter</span>
        </li>
        <li><a href="#" className="transition-all duration-300 hover:-translate-y-1 hover:text-primary inline-block" title="pinterest"><ion-icon name="logo-instagram"></ion-icon></a>
          <span className="tm-heroslider-social-tooltip">Pinterest</span>
        </li>
      </ul>
    </div>
  );
}

export default Hero
  
