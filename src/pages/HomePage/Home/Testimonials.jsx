import { useState } from 'react';

function Testimonials() {
  const testimonials = [
    
    {
      author: "Hosea Hilll",
      text: "L'éclat is a remarkable experience that captivates the senses and leaves a lasting impression. The ambiance, service, and attention to detail are truly exceptional.",
      image: "/images/portfolio-image-2.jpg"
    },
    {
      author: "Abbey Douglas",
      text: "The experience at l'éclat was nothing short of magical. Every detail was meticulously crafted to create a perfect evening.",
      image: "/images/portfolio-image-3.jpg"
    },
    {
      author: "John Doe",
      text: "The experience at l'éclat was nothing short of magical. Every detail was meticulously crafted to create a perfect evening.",
      image: "/images/portfolio-image-4.jpg"
    },
    {
      author: "Jane Smith",
      text: "I was blown away by the quality of service and the exquisite atmosphere at l'éclat. A must-visit for anyone looking for a memorable dining experience.",
      image: "/images/portfolio-image-5.jpg"
    }
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
      <div class="tm-section tm-testimonial-area tm-padding-section bg-white" data-white-overlay="8"
           data-bgimage="assets/images/testimonial-bg-image.png">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-9 col-12">
              <div class="tm-sectiontitle text-center">
                <h2>Customer Testimonials</h2>
                <span class="tm-sectiontitle-divider">
                  <img src="/images/flower.png" alt="section divider" />
                </span>
                <h3>What Our Customers Say</h3>
                <p>At l'éclat, we strive to provide an unforgettable dining experience, where every detail is crafted with care and passion. Our customers' satisfaction is our top priority.</p>
              </div>
            </div>
          </div>
          <div class="tm-testimonial-wrapper tm-testimonial-slider">
            <div class="tm-testimonial">
              <span class="tm-testimonial-authorimage">
                <img src={testimonials[currentIndex].image} alt="author image" />
              </span>
              <p>{testimonials[currentIndex].text}</p>
              <div class="tm-testimonial-author">
                <h6>{testimonials[currentIndex].author}</h6>
                <span>Client</span>
              </div>
            </div>
            <button className='mr-2' onClick={prevTestimonial}>Previous</button>
            <button onClick={nextTestimonial}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
  
