function Hero() {
  return (
    // Heroslider Area wrapper
    <div className="tm-heroslider-area">
      {/* Heroslider Item */}
      <div className="tm-heroslider background bg-cover bg-center bg-no-repeat min-h-[80vh] relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="tm-heroslider-contentwrapper">
                <div className="tm-heroslider-content">
                  <h1 className="font-[900]">A thing of beauty is a joy forever for women</h1>
                  <p>The experience of beauty often involves an interpretation of some
                    entity as being in balance.</p>
                  <button id="services" className="tm-button hash-scroll-link inline-block px-8"><a href="#tm-service-area">Read More</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="tm-heroslider-social">
        <li><a href="#" title="facebook"><ion-icon name="logo-facebook"></ion-icon></a>
          <span className="tm-heroslider-social-tooltip">Facebook</span>
        </li>
        <li><a href="#" title="twitter"><ion-icon name="logo-twitter"></ion-icon></a>
          <span className="tm-heroslider-social-tooltip">Twitter</span>
        </li>
        <li><a href="#" title="pinterest"><ion-icon name="logo-instagram"></ion-icon></a>
          <span className="tm-heroslider-social-tooltip">Pinterest</span>
        </li>
      </ul>
    </div>
  );
}

export default Hero
  
