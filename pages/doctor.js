import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import Image from 'next/image';

const Doctor = () => {
  return (
    <Layouts>
      <PageBanner title={"SEE THE PRODUCTS"} bgnone />
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <Image 
                    src="/assets/img/doctors/01.jpg" 
                    alt="Image" 
                    width={400}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sanmminpowder">
                      <a>SANMMIN POWDER</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <Image 
                    src="/assets/img/doctors/02.jpg" 
                    alt="Image" 
                    width={400}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/mastisidpowder">
                      <a>Mastisid Powder</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Supplement</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/03.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sidplex">
                      <a>SIDPLEX</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Injection </span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/04.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sanvorm">
                      <a>SANVORM</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Antiparasitic Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/05.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sanmac12">
                      <a>SANMAC 12</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Injectable Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/06.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sanvitam-H">
                      <a>SANVITAM-H</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle & Poultry Feed Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/07.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANCAL-PLUS</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/08.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/santiX">
                      <a>SANTI X</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Medicated Soap</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/09.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/contact">
                      <a>SANCAL ADVANCE GEL</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>

                </div>
              </div>
            </div>
          </div>

          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/10.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/contact">
                      <a>SIDRAZ</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/11.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sancool">
                      <a>SANCOOL POWDER</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Electrolyte & Anti-Stress Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/12.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/contact">
                      <a>SANVORM-KIDS</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/13.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SAN-PLUS</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/14.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/sanplus">
                      <a>SANPLUS-SP</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Injection & Bolus</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/15.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/mastisid">
                      <a>MASTISID</a>
                    </Link>
                  </h5>
                  <span className="specialty">Veterinary Feed Supplement</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/16.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/contact">
                      <a>SANPLUS ULTRA</a>
                    </Link>
                  </h5>
                  <span className="specialty">Cattle Supplement</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/17.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANWORM 3.15-LA</a>
                    </Link>
                  </h5>
                  <span className="specialty">30ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/18.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SENROCIN</a>
                    </Link>
                  </h5>
                  <span className="specialty">100ML</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/19.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SIDCEF-TAZO</a>
                    </Link>
                  </h5>
                  <span className="specialty">562.5MG</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/20.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANZON FORT</a>
                    </Link>
                  </h5>
                  <span className="specialty">100ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/21.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANNMIN POWDER</a>
                    </Link>
                  </h5>
                  <span className="specialty">1KG</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/22.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANCAL GEL</a>
                    </Link>
                  </h5>
                  <span className="specialty">300GM</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/23.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SAN HEAT</a>
                    </Link>
                  </h5>
                  <span className="specialty">5*50GM</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/24.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>LIVSID</a>
                    </Link>
                  </h5>
                  <span className="specialty">200ML</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/25.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANBOOST</a>
                    </Link>
                  </h5>
                  <span className="specialty">6 SACHET*20GM</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/26.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>CLOXSID</a>
                    </Link>
                  </h5>
                  <span className="specialty">4.5GM</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/27.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SIDCEF</a>
                    </Link>
                  </h5>
                  <span className="specialty">3GM</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/28.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>LIVSID</a>
                    </Link>
                  </h5>
                  <span className="specialty">500ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/29.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SENROCIN-LA</a>
                    </Link>
                  </h5>
                  <span className="specialty">100ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/30.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANPUM</a>
                    </Link>
                  </h5>
                  <span className="specialty">225ML</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/31.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>MILK-SOAR LIQUID</a>
                    </Link>
                  </h5>
                  <span className="specialty">500ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/32.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>ENSURE GARBHDHARAN</a>
                    </Link>
                  </h5>
                  <span className="specialty">225ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/33.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANZON FORT</a>
                    </Link>
                  </h5>
                  <span className="specialty">100ML</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/34.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANROTONE</a>
                    </Link>
                  </h5>
                  <span className="specialty">500ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/35.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANCAL-P</a>
                    </Link>
                  </h5>
                  <span className="specialty">200ML</span>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/36.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANCAL-AD3</a>
                    </Link>
                  </h5>
                  <span className="specialty">1L</span>

                </div>
              </div>
            </div>
          </div>
          <div className="row doctors-loop justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/37.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>SANERGY BOOSTER</a>
                    </Link>
                  </h5>
                  <span className="specialty">1L</span>

                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/38.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Greg S. Grinstead</a>
                    </Link>
                  </h5>
                  <span className="specialty">Neurology</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="doctor-box-one mb-30">
                <div className="doctor-photo">
                  <img src="assets/img/doctors/39.jpg" alt="Image" />
                </div>
                <div className="doctor-information">
                  <h5 className="name">
                    <Link href="/doctor-details">
                      <a>Roger K. Jackson</a>
                    </Link>
                  </h5>
                  <span className="specialty">Orthopedics</span>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>


          <div className="load-more-doctors text-center mt-40">
            <a href="#" className="template-btn template-btn-primary">
              Contact Us <i className="far fa-plus"></i>{" "}
            </a>
          </div>
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}

      {/* <!--====== Skill Section Start ======--> */}
      <section className="skill-section section-gap border-top-primary">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="tile-gallery-two pr-lg-3">
                <div className="image-one">
                  <img src="assets/img/tile-gallery/04.jpg" alt="Image" />
                </div>
                <div
                  className="image-two text-right wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="assets/img/tile-gallery/05.jpg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="skill-content pl-xl-5 mt-md-50">
                <div className="section-heading mb-20">
                  <span className="tagline">Professional Skills</span>
                  <h2 className="title">
                    25 Years Of Experience In Medical Services
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem santium
                  doloremque laudantium totam rem aperieaque ipsa quae abillo
                  ven veritatis et quasi architecto beatae vitae dicta.
                </p>
                <div
                  className="skills-items mt-50 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="89"
                    data-line-color="#499afa"
                    data-line-bg="#e4f0fe"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Medical Care</h5>
                      <span className="progress-percentage">89%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="64"
                    data-line-color="#ffae00"
                    data-line-bg="#fff3d9"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Family Care</h5>
                      <span className="progress-percentage">64%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="78"
                    data-line-color="#b505ff"
                    data-line-bg="#f4daff"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Child Care</h5>
                      <span className="progress-percentage">78%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                  <div
                    className="progress-bar-wrapper mb-40"
                    data-percentage="85"
                    data-line-color="#ff3000"
                    data-line-bg="#ffe0d9"
                  >
                    <div className="progress-title-wrap">
                      <h5 className="progress-title">Senior Care</h5>
                      <span className="progress-percentage">85%</span>
                    </div>
                    <div className="progress-line-wrap">
                      <div className="progress-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Doctor;
