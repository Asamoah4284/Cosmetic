function Gallery() {
  // Add product data
  const products = [
    { id: 1, name: "Luminous Foundation", price: 39.99, image: "/images/1.jpg" },
    { id: 2, name: "Velvet Matte Lipstick", price: 24.99, image: "/images/2.jpg" },
    { id: 3, name: "Natural Glow Blush", price: 29.99, image: "/images/3.jpg" },
    { id: 4, name: "Silk Finish Powder", price: 34.99, image: "/images/4.jpg" },
    { id: 5, name: "Long-wear Mascara", price: 22.99, image: "/images/5.jpg" },
    { id: 6, name: "Eyeshadow Palette", price: 45.99, image: "/images/8.jpg" },
  ];

  return <div className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8">
      <div class="tm-section tm-portfolio-area tm-padding-section  container">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8 col-md-9 col-12">
                            <div class="tm-sectiontitle text-center">
                                <h2>Gallery</h2>
                                <span class="tm-sectiontitle-divider">
                                    <img src="/images/flower.png" alt="section divider"/>
                                </span>
                                <p  className="text-[16px]">Discover our exquisite collection of cosmetics that enhance your natural beauty.</p>
                                <p>Our range features high-quality products, from vibrant lipsticks to luxurious foundations, catering to all skin types and tones.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                    <div className="aspect-w-4 aspect-h-3">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="h-64 w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                                        <p className="text-xl font-bold text-rose-600">${product.price}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-16">
                        <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 transition-colors duration-200">
                            Load More
                        </button>
                    </div>
                </div>

            </div>
    </div>
  </div>
  }

  export default Gallery
  
