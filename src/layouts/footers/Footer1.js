import React from "react";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      {!noNewsletters && (
        <div className="cta-boxed-one">

        </div>
      )}
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo.png" alt="Medibo" />
                  </div>
                  <p>
                    Sansid Pharma Pvt. Ltd. Always there to care
                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="">
                        <i className="far fa-map-marker-alt" />
                        Shop No.2,Samarth Complex, Ur.Devachi Pune-412380(MH)
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="far fa-envelope" />
                        sansidpharma@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="" />

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-5 col-md-6">
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
                          <a href="#">Urgent Care</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6">
                    <div className="widget instagram-widget">
                      <h4 className="widget-title">Photo Gallery</h4>
                      <div className="instagram-images">
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/01.jpg"
                            alt="Instagram"
                          />

                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/02.jpg"
                            alt="Instagram"
                          />

                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/03.jpg"
                            alt="Instagram"
                          />

                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/04.jpg"
                            alt="Instagram"
                          />

                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/05.jpg"
                            alt="Instagram"
                          />

                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/06.jpg"
                            alt=""
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Newsletters</h4>
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
export default Footer1;
