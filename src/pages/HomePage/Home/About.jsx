function About() {
   
  return <div>
      {/* <!-- About Area --> */}
            <section id="tm-about-area" className="tm-section tm-about-area tm-padding-section bg-white"
                style={{ scrollBehavior: 'smooth' }}
                data-bgimage="assets/images/about-bg-image.png" data-white-overlay="8">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8 col-md-9 col-12">
                            <div class="tm-sectiontitle text-center">
                                <h2>About Us</h2>
                                <span class="tm-sectiontitle-divider">
                                    <img src="/images/flower.png" alt="section divider"/>
                                </span>
                                <p>Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit
                                    inuning ut sed sittem do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <section className="section about" id="about" aria-label="about">
        <div className="container grid grid-cols-1  lg:grid-cols-2 gap-4">
 <div className="flex  flex-col items-center justify-center md:px-5">
            <h2 className=" mb-8 transition-colors duration-300">
              Discover Your Beauty: Unleashing the Power of Cosmetics
            </h2>

            <p className="header-paragraph ">
              We believe in the transformative power of cosmetics to enhance natural beauty and boost confidence. Our mission is to provide innovative and high-quality cosmetic solutions that empower individuals to express themselves. With a commitment to creativity and excellence, we strive to inspire beauty enthusiasts and professionals alike, ensuring that everyone can discover their unique style and shine in their own way.
            </p>

        
          </div>

          <figure className="about-banner" >
            <img src='/images/skin-1.jpeg' 
                 loading="lazy" 
                 alt="about banner"
                 className="w-100 h-[350px] md:h-[450px]
                 object-cover transform transition-transform duration-500" />
            
          
          </figure>
         

        </div>
      </section>
                </div>
            </section>
            {/* <!--// About Area --> */}
  </div>
  }

  export default About
  
