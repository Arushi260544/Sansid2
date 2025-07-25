import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("number").value,
      website: document.getElementById("website").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        alert("Form submitted successfully!");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <Layouts footer={2}>
      <PageBanner title={"Contact Us"} />

      {/*====== Contact Info Section Start ======*/}
      <section className="section-gap contact-top-wrappper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="contact-info-wrapper">
                <div className="single-contact-info">
                  <h3 className="info-title">
                    <i className="fal fa-map-marker-alt" /> Address
                  </h3>
                  <p>
                    Shop No.2, Samarth Complex,
                    Ur. Devachi, Pune – 412308 (M.H)
                  </p>
                </div>
                <div className="single-contact-info">
                  <h3 className="info-title">
                    <i className="fal fa-coffee" /> Get In Touch
                  </h3>
                  <ul>
                    <li>
                      <span>Email Address</span>
                      <a href="">sansidpharma@gmail.com</a>
                    </li>
                  </ul>
                </div>
                <div className="single-contact-info"></div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="working-hour-chart">
                <h2 className="chart-title">Working Hour</h2>
                <ul>
                  <li>
                    <span><i className="far fa-angle-right" /> Monday</span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span><i className="far fa-angle-right" /> Tuesday</span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span><i className="far fa-angle-right" /> Wednesday</span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span><i className="far fa-angle-right" /> Thursday</span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span><i className="far fa-angle-right" /> Friday</span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span><i className="far fa-angle-right" /> Saturday</span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span><i className="far fa-angle-right" /> Sunday</span>
                    <span>9:00-19:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info Section End ======*/}

      {/*====== Contact Form Start ======*/}
      <section className="contact-form-area">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92211.31123041779!2d73.80966325901726!3d18.52762987222076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b979a5ecf1cb%3A0xfc4aedf09365dd9a!2sShop%20No%202!5e1!3m2!1sen!2sin!4v1753426183383!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-heading mb-60 text-center">
                  <span className="tagline">{`We're Ready To Help You`}</span>
                  <h2 className="title">Leave a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="name">Your Full Name</label>
                        <input
                          type="text"
                          placeholder="Michael M. Smith"
                          id="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          placeholder="support@gmail.com"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          placeholder="+012 (345) 678 99"
                          id="number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-field">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          placeholder="www.seeva.com"
                          id="website"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-field">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          id="message"
                          placeholder="Write Message...."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button className="template-btn">
                          Send Us Message <i className="far fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Contact;
