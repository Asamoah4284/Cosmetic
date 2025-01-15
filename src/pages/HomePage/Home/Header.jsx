function Head() {
    return <div>
       <div className="tm-header tm-header-sticky ">
<div className="tm-header-toparea">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-8">
                <ul className="tm-header-info">
                    <li><i className="ti ti-mobile"></i><b>Contact:</b> <a href="tel:18009156270">0206616983
                        </a></li>
                    <li><i className="ti ti-time"></i><b>Work time:</b> 9:00-18:00</li>
                </ul>
            </div>
            <div className="col-md-4">
                <ul className="tm-header-icons">
                    <li><a href="#appointment-area" className="hash-scroll-link">Book Appointment</a></li>
                    <li><a href="cart.html"><i className="ti ti-shopping-cart"></i></a></li>
                    <li><a href="login-register.html"><i className="ti ti-user"></i></a></li>
                    <li><button className="tm-header-searchtrigger"><i className="ti ti-search"></i></button></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="tm-header-bottomarea">
    <div className="container">
        <div className="tm-header-bottominside">
            <div className="tm-header-searcharea">
                <form action="#">
                    <input type="text" placeholder="Enter search keyword.."/>
                    <button type="submit"><i className="ti ti-search"></i></button>
                </form>
                <button className="tm-header-searchclose"><i className="ti ti-close"></i></button>
            </div>
            <div className="tm-header-inner">
               
                <nav className="tm-header-nav">
                    <ul classNameName="flex items-center justify-center gap-0">
                       
                        <li><a href="#tm-about-area">Home</a></li>
                        <li><a href="#tm-about-area">About</a></li>
                        <li><a href="#tm-service-area">Service</a></li>

                        
                        <li><a href="#tm-contactus-area">Contact</a></li>
                    </ul>
                </nav>
                <div className="tm-header-button">
                    <a href="#appointment-area" className="tm-button hash-scroll-link">Book Appointment</a>
                </div>
                <div className="tm-mobilenav"></div>
            </div>
        </div>
    </div>
</div>

</div>
    </div>
   }
 
   export default Head
   
 