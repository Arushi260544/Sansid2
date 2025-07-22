import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Product2 = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Michael l. Johnson"}
        pageName={"Doctor Details"}
        bgnone
      />
      {/* <!--====== Doctor Section Start ======--> */}
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="doctor-details-wrapper">
            <div className="doctor-info-box">
              <div className="doctor-photo">
                <img src="assets/img/doctors/doctor_details.jpg" alt="Image" />
              </div>
              <div className="doctor-description">
                <div className="description-header">
                  <div>
                    <h3 className="name">Michael I. Johnson </h3>
                    <span className="specialty">Family Care Specialist</span>
                  </div>
                  <div>
                    <a href="#" className="template-btn template-btn-primary">
                      Appointment Now <i className="far fa-plus"></i>
                    </a>
                  </div>
                </div>
                <p>
                  aaaaaaaa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Doctor Section End ======--> */}
    </Layouts>
  );
};
export default Product2;
