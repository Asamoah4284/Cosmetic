function Service() {
   
  return <div>
     {/* <!-- Service Area --> */}
            <div id="tm-service-area" class="tm-section tm-service-area tm-padding-section bg-white">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8 col-md-9 col-12">
                            <div class="tm-sectiontitle text-center">
                                <h2>Our Services</h2>
                                <span class="tm-sectiontitle-divider">
                                    <img src="/images/flower.png" alt="section divider"/>
                                </span>
                                <p className="text-[16px]">We offer a range of high-quality beauty products tailored to enhance your natural beauty. Our collection includes perfumes, skincare, and makeup essentials designed to meet diverse needs and preferences.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters tm-service-wrapper">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="tm-service text-center ">
                                <span class="tm-service-icon">
                                <div className="hover:text-pink-500">
                                    <img src="/images/perfume-spray.png" className="w-28" alt="" />
                                    <a href="https://www.flaticon.com/free-icons/cosmetics" title="cosmetics icons"></a>
                                </div>
                                </span>
                                <h5>Perfume</h5>
                                <p>Experience the essence of elegance with our exquisite perfume collection, designed to captivate your senses and enhance your personal style.</p>
                                <button class="tm-readmore tm-readmore-dark">Read more</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="tm-service text-center ">
                                <span class="tm-service-icon">
                                    <img src="/images/make-up.png" className="w-28" alt="" />
                                </span>
                                <h5>Pomade</h5>
                                <p>Our pomade offers a strong hold and a natural finish, perfect for styling your hair with ease. Whether you're going for a sleek look or a textured finish, our pomade is designed to meet your needs.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="tm-service text-center ">
                                <span class="tm-service-icon">
                                <img src="/images/cream.png" className="w-28" alt="" />
                                </span>
                                <h5>Skin care</h5>
                                <p>Our skin care products are formulated with natural ingredients to nourish and rejuvenate your skin. From moisturizers to serums, we provide solutions for all skin types.</p>
                                <button class="tm-readmore tm-readmore-dark">Read more</button>
                            </div>
                        </div>
                     
                      
                    
                    </div>
                </div>
            </div>
            {/* <!--// Service Area --> */}
  </div>
  }

  export default Service
  
