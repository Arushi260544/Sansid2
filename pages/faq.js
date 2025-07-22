import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [active, setActive] = useState("collapse1");
  const active_ = (value) => (value === active ? "active-accordion" : "");
  const [video, setVideo] = useState(false);
  return (
    <Layouts>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Help & FAQ"} bgnone />
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="faq-page-content pr-xl-4">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <p className="mb-35">
                  Answers to the most common questions about our products, usage, safety, and services.

                </p>
                <Accordion
                  defaultActiveKey="collapse1"
                  className="accordion"
                  id="accordionFaq"
                >
                  <div className={`accordion-item ${active_("1")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse1"
                        onClick={() => setActive("1")}
                        data-toggle="collapse"
                      >
                        <span>
                          What types of animals do your products cater to?

                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse1">
                      <div className="accordion-content">
                        <p>
                         We manufacture veterinary medicines and supplements for cows, dogs, goats, poultry (hens), and more.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("2")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse2"
                        onClick={() => setActive("2")}
                        data-toggle="collapse"
                      >
                        <span>Are your products safe for all breeds and ages?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse2">
                      <div className="accordion-content">
                        <p>
                          Yes, our formulations are developed by experts and are generally safe for all breeds. However, always follow the dosage guidelines or consult a veterinarian for age-specific care.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("3")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse3"
                        onClick={() => setActive("3")}
                        data-toggle="collapse"
                      >
                        <span>
                          Do I need a vet prescription to use your products?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse3">
                      <div className="accordion-content">
                        <p>
                          Some of our products are prescription-based, especially those for specific conditions. Others, like supplements and external applications, are available for general use.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("4")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse4"
                        onClick={() => setActive("4")}
                        data-toggle="collapse"
                      >
                        <span>
                         How can I find the right product for my animals condition?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse4">
                      <div className="accordion-content">
                        <p>
                          You can browse our product categories by animal type or health concern. For specific conditions, we recommend consulting a licensed veterinarian.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("5")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse5"
                        onClick={() => setActive("5")}
                        data-toggle="collapse"
                      >
                        <span>
                          {` Are your products approved or tested?`}
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse5">
                      <div className="accordion-content">
                        <p>
                          Yes, all Sansid Pharma products are made in GMP-certified facilities and tested for safety, quality, and efficacy.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("6")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse6"
                        onClick={() => setActive("6")}
                        data-toggle="collapse"
                      >
                        <span>
                          Do you offer nutritional supplements for animals?

                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse6">
                      <div className="accordion-content">
                        <p>
                          Yes, we offer a wide range of nutritional supplements to support immunity, digestion, and overall health for both pets and livestock.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("7")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse7"
                        onClick={() => setActive("7")}
                        data-toggle="collapse"
                      >
                        <span>How do I store the medicines properly?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse7">
                      <div className="accordion-content">
                        <p>
                          Store all products in a cool, dry place away from direct sunlight and out of reach of children and animals. Always check the label for storage instructions.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("8")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse8"
                        onClick={() => setActive("8")}
                        data-toggle="collapse"
                      >
                        <span>
                         Can I give multiple products to the same animal at once?

                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse8">
                      <div className="accordion-content">
                        <p>
                         Some products can be used together, but we strongly recommend checking with a vet before combining treatments or supplements.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("9")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse9"
                        onClick={() => setActive("9")}
                        data-toggle="collapse"
                      >
                        <span>Do you offer home delivery?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse9">
                      <div className="accordion-content">
                        <p>
                          Yes, we offer doorstep delivery for most locations. Shipping options and timelines are provided at checkout or on inquiry.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("10")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse10"
                        onClick={() => setActive("10")}
                        data-toggle="collapse"
                      >
                        <span>
                          What if my animal shows a reaction to a product?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse10">
                      <div className="accordion-content">
                        <p>
                          Discontinue use immediately and consult a veterinarian. You can also report the issue to our support team for further assistance.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("11")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse11"
                        onClick={() => setActive("11")}
                        data-toggle="collapse"
                      >
                        <span>Where are your products manufactured?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse11">
                      <div className="accordion-content">
                        <p>
                          All our products are manufactured in India at facilities that follow strict quality control protocols and veterinary standards.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div className={`accordion-item ${active_("11")}`}>
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapse11"
                        onClick={() => setActive("11")}
                        data-toggle="collapse"
                      >
                        <span>
                         How can I contact Sansid Pharma for support?

                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapse11">
                      <div className="accordion-content">
                        <p>
                         You can reach us via email at sansidpharma@gmail.com for product-related queries or support.

                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="faq-sidebar">
                <div className="search-widget mb-50">
                  <h3 className="search-title">Frequently Asked Questions</h3>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search Here" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="video-widget">
                  <img src="assets/img/section-img/faq-video.jpg" alt="Image" />

                  <a
                    href="#"
                    className="video-popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideo(true);
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Faq;
