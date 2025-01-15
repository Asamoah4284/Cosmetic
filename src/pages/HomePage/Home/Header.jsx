function Head() {
    return <div>
       <div className="tm-header tm-header-sticky ">
<div className="tm-header-toparea">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-8">
                <ul className="tm-header-info flex items-center ">
                    <li><ion-icon name="phone-portrait-outline"></ion-icon><a href="tel:18009156270">0206616983</a></li>
                    <li className=""><ion-icon name="time-outline"></ion-icon>9:00-18:00</li>
                </ul>
            </div>
            <div className="col-md-4">
                <ul className="tm-header-icons">
                    <li><a href="#appointment-area" className="hash-scroll-link">Book Appointment</a></li>
                    <li><a href="#" title="facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                </li>
                <li><a href="#" title="facebook"><ion-icon name="logo-twitter"></ion-icon></a>
                </li>                    <li><a href="#" title="facebook"><ion-icon name="logo-instagram"></ion-icon></a>
                </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="tm-header-bottomarea">
    <div className="container">
        <div className="tm-header-bottominside">
            <div className="tm-header-searcharea">
               
                <button className="tm-header-searchclose"><i className="ti ti-close"></i></button>
            </div>
            <div className="tm-header-inner">
               <img src="/images/logo.svg" className="w-24" />
                <nav className="tm-header-nav text-center">
                    <ul classNameName="flex items-center justify-center gap-0">
                       
                        <li><a href="">Home</a></li>
                        <li><a href="#tm-about-area" className="hash-scroll-link">About</a></li>
                        <li><a href="#tm-service-area">Service</a></li>
                       

                        
                    </ul>
                </nav>
                <div className="tm-header-button">
                    <button href="#appointment-area" className="tm-button hash-scroll-link ">Book Appointment</button>
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
   
 