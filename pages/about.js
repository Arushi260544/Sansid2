import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import Image from "next/image";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer={2}>
      <PageBanner title={"About"} />
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="circle-image-gallery mb-md-50">
                <div className="row">
                  <div className="col-6 gallery-left">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <Image
                        src="/assets/img/circle-image-gallery/01.jpg"
                        alt="gallery image"
                        width={400}
                        height={400}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <Image
                        src="/assets/img/circle-image-gallery/04.jpg"
                        alt="gallery image"
                        width={400}
                        height={400}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <Image
                        src="/assets/img/circle-image-gallery/03.jpg"
                        alt="gallery image"
                        width={400}
                        height={400}
                        className="animate-float-bob-y"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <Image
                        src="/assets/img/circle-image-gallery/02.jpg"
                        alt="gallery image"
                        width={400}
                        height={400}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="about-text">
                <div className="section-heading mb-35">
                  <span className="tagline">About Sansid</span>
                  <h2 className="title">All-in-One Worksite Cattle Solution</h2>

                  <p>10 Years Of Experience </p>
                </div>
                <p>
                  Sansid Pharma Private Limited is committed to empowering Indias livestock sector with the motto “Humans Thrive if Cows Survive.” With decades of experience and a deep focus on innovation, we aim to maximize animal productivity by delivering high-quality, affordable, and accessible pharmaceutical products across the country.Rooted in the principles of affordability, accessibility, innovation, teamwork, excellence, and traditional knowledge, Sansid Pharma continues to grow as a trusted name in animal healthcare. We believe that collaboration and indigenous wisdom are key to sustainable growth and self-reliance.


                </p>
                <Link href="/contact">
                  <a className="template-btn mt-40">
                    Learn More <i className="far fa-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}

      <div className="wcu-with-doctors">
        {/* <!--====== Why Choose Section Start ======--> */}
        <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Mission ans Vision</span>
                  <h2 className="title">
                    To establish India as a self-reliant nation in livestock healthcare by providing innovative and accessible veterinary solutions. We strive to become a leading pharmaceutical company through our unwavering commitment and the strength of our highly skilled team—including medical representatives, quality experts, and trained professionals.

                    At Sansid Pharma, we are proud to deliver promising solutions that make a meaningful impact on the lives of livestock and the cattlemen who care for them.
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Optimize Your Health Care Services</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <Image 
                      src="/assets/img/img-title-box/01.jpg" 
                      alt="Image" 
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Boost Employee Engagement</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <Image 
                      src="/assets/img/img-title-box/02.jpg" 
                      alt="Image" 
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Accelerate Your Return On Investment</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <Image 
                      src="/assets/img/img-title-box/03.jpg" 
                      alt="Image" 
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* <!--====== Why Choose Section End ======--> */}

        {/* <!--====== Doctor Section Start ======--> */}
        {/* <section className="doctors-section bg-color-grey polygon-pattern-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Professional Team</span>
                  <h2 className="title">Meet Our Experience Team Members</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center doctors-loop">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/18.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Allan K. Simons</a>
                      </Link>
                    </h5>
                    <span className="specialty">Dental Specialist</span>
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/19.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Marcus K. Staton</a>
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/20.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Travis A. Costillo</a>
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/21.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>M.Calhoun</a>
                      </Link>
                    </h5>
                    <span className="specialty">Cardiology</span>
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
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--====== Doctor Section End ======--> */}
      </div>

      {/* <!--====== FAQ Section Start ======--> */}
      {/* <section className="faq-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-image text-center text-lg-left mb-md-50">
                <img src="assets/img/section-img/faq-image.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-sm-11">
              <div className="faq-content pl-xl-5">
                <div className="section-heading mb-30">
                  <span className="tagline">How Can We help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Needs
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperieaqueys epsa
                  quae abillo inventore veritatis et quase
                </p>
                <Accordion
                  defaultActiveKey="collapseOne"
                  className="accordion-style-two mt-30"
                >
                  <div
                    className={
                      toggle === 1
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseOne"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 1 ? 0 : 1)}
                      >
                        <span>Advanced Equipment and Best Dentists</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseOne">
                      <div className="accordion-content">
                        <p>
                          Orem psum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore ets dolore
                          magna aliqua uispsum suspendisse
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseTwo"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 2 ? 0 : 2)}
                      >
                        <span>Our 10 Years Working Experience</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseTwo">
                      <div className="accordion-content">
                        <p>
                          Orem psum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore ets dolore
                          magna aliqua uispsum suspendisse
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 3
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseThree"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 3 ? 0 : 3)}
                      >
                        <span>Advanced Equipment and Best Dentists</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseThree">
                      <div className="accordion-content">
                        <p>
                          Orem psum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore ets dolore
                          magna aliqua uispsum suspendisse
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default About;
