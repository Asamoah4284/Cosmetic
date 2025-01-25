function About() {
   
  return <div>
      {/* <!-- About Area --> */}
            <section 
              id="tm-about-area" 
              className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
            >
              <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    About Us
                  </h2>
                  <div className="flex justify-center items-center mb-6">
                    <div className="h-[2px] w-20 bg-pink-400"></div>
                    <img 
                      src="/images/flower.png" 
                      alt="divider" 
                      className="mx-4 h-8 w-8 opacity-80"
                    />
                    <div className="h-[2px] w-20 bg-pink-400"></div>
                  </div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    At our cosmetics brand, we celebrate individuality and empower self-expression through beauty. 
                    Our products are crafted with care, ensuring quality and innovation to help you shine your brightest.
                  </p>
                </div>

                {/* Main Content */}
                <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      Discover Your Beauty: Unleashing the Power of Cosmetics
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We believe in the transformative power of cosmetics to enhance natural beauty and boost confidence. 
                      Our mission is to provide innovative and high-quality cosmetic solutions that empower individuals 
                      to express themselves. With a commitment to creativity and excellence, we strive to inspire beauty 
                      enthusiasts and professionals alike.
                    </p>
                  </div>

                  <div className="relative group" data-aos="fade-left" data-aos-duration="1000">
                    <img 
                      src="/images/skin-1.jpeg"
                      alt="about banner"
                      className="w-full h-[450px] object-cover rounded-lg shadow-xl 
                                 transform group-hover:scale-[1.02] transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                                  rounded-lg group-hover:from-black/30 transition-all duration-300">
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--// About Area --> */}
  </div>
  }

  export default About
  
