import React from "react";

const Footer2 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer template-footer-white ${
        noNewsletters ? "" : "have-cta-boxes-two"
      }`}
    >
      {!noNewsletters && (
        <div className="cta-boxes-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              
            
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-primary">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo-white.png" alt="Medibo" />
                  </div>
                  <p>
                    Sansid Pharma Pvt. Ltd.
Always there to care

                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="">
                        <i className="far fa-map-marker-alt" />
                       Shop No.2, Samarth Complex,
Ur. Devachi, Pune – 412308 (M.H)

                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="far fa-envelope" />
                        sansidpharma@gmail.com
                      </a>
                    </li>
                    <li>
                      {/* <a href="tel:01267899">
                        <i className="far fa-phone" />
                       
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Quick Links</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About us</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                          <li>
                            <a href="#">Terms & Conditions</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                         
                       </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Product Categories</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="#">For Cows</a>
                          </li>
                          <li>
                            <a href="#">For Dogs</a>
                          </li>
                          <li>
                            <a href="#">For Hens</a>
                          </li>
                          <li>
                            <a href="#">For Goats</a>
                          </li>
                          <li>
                            <a href="#">For Fish</a>
                          </li>
                          {/* <li>
                            <a href="#">Latest News</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Stay Connected</h4>
                  <p>
                   Subscribe for the latest animal health tips, product updates, and special offers in your inbox.

                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="newsletters-form"
                  >
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </form>
                  <div className="opening-notice mt-30">
                    <h6>
                      <i className="" /> 
                    </h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2025 <a href="#">sansidpharma</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
