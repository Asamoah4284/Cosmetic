function Service() {
   
  return <div>
     {/* <!-- Service Area --> */}
            <div id="tm-service-area" className="tm-section tm-service-area tm-padding-section bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-9 col-12">
                            <div className="tm-sectiontitle text-center" data-aos="fade-up" data-aos-duration="500">
                                <h2>Our Services</h2>
                                <span className="tm-sectiontitle-divider">
                                    <img src="/images/flower.png" alt="section divider"/>
                                </span>
                                <p className="text-[16px]">We offer a range of high-quality beauty products tailored to enhance your natural beauty. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters tm-service-wrapper">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-service text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                <span className="tm-service-icon">
                                <div className="hover:text-pink-500">
                                    <img src="/images/perfume.svg" className="w-28" alt="" />
                                    <a href="https://www.flaticon.com/free-icons/cosmetics" title="cosmetics icons"></a>
                                </div>
                                </span>
                                <h5>Perfume</h5>
                                <p>Discover our elegant perfume collection, crafted to enhance your style.</p>
                                <button className="tm-readmore tm-readmore-dark ">Read more</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-service text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                <span className="tm-service-icon">
                                    <img src="/images/makeup.svg" className="w-28" alt=""/>
                                </span>
                                <h5>Pomade</h5>
                                <p>Our pomade offers a strong hold and a natural finish, perfect for styling your hair with ease. </p>
                                <button className="tm-readmore tm-readmore-dark cursor-pointer" >Read more</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="tm-service text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                <span className="tm-service-icon">
                                <img src="/images/cream.svg" className="w-28" alt="" />
                                </span>
                                <h5>Skin care</h5>
                                <p>Our skin care products are formulated with natural ingredients to nourish  your skin.</p>
                                <button className="tm-readmore tm-readmore-dark cursor-pointer">Read more</button>
                            </div>
                        </div>
                     
                      
                    
                    </div>
                </div>
            </div>
            {/* <!--// Service Area --> */}
  </div>
  }

  export default Service
  
