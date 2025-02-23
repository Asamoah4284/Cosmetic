import { useState } from 'react';

function Testimonials() {
  const testimonials = [
    
    {
      author: "Hosea Hill",
      text: "L'éclat is a remarkable experience that captivates the senses and leaves a lasting impression. The ambiance, service, and attention to detail are truly exceptional.",
      image: "/images/portfolio-image-2.jpg"
    },
    {
      author: "Abbey Ivy",
      text: "The experience at l'éclat was nothing short of magical. Every detail was meticulously crafted to create a perfect evening.",
      image: "/images/portfolio-image-3.jpg"
    },
    {
      author: "Jennifer Acquah",
      text: "The experience at l'éclat was nothing short of magical. Every detail was meticulously crafted to create a perfect evening.",
      image: "/images/portfolio-image-4.jpg"
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <div className="tm-section tm-testimonial-area tm-padding-section bg-white" data-white-overlay="8"
           data-bgimage="assets/images/testimonial-bg-image.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-9 col-12">
              <div className="tm-sectiontitle text-center mb-5">
                <h2 className="font-serif text-3xl mb-4">Customer Testimonials</h2>
                <span className="tm-sectiontitle-divider">
                  <img src="/images/flower.png" alt="section divider" className="mx-auto w-16" />
                </span>
                <h3 className="text-xl mt-4 text-gray-700">What Our Customers Say</h3>
                <p className="text-gray-600 mt-2">At l'éclat, we strive to provide an unforgettable dining experience, where every detail is crafted with care and passion. Our customers' satisfaction is our top priority.</p>
              </div>
            </div>
          </div>
          <div className="tm-testimonial-wrapper relative max-w-3xl mx-auto px-4">
            <div className="tm-testimonial bg-white rounded-lg shadow-lg p-8 text-center">
              <span className="tm-testimonial-authorimage block mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt="author image" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gold"
                />
              </span>
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              <div className="tm-testimonial-author">
                <h6 className="text-xl font-semibold text-gray-800 mb-1">{testimonials[currentIndex].author}</h6>
                <span className="text-gray-500">Client</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="px-6 py-2 bg-gold hover:bg-gold/90 rounded-full transition-all duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button 
                onClick={nextTestimonial}
                className="px-6 py-2 bg-gold hover:bg-gold/90 rounded-full transition-all duration-300 flex items-center"
              >
                Next
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
  
