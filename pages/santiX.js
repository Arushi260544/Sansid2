import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const SantiX = () => {
  return (
    <Layouts>
      <PageBanner
        title={"SantiX Soap"}
        pageName={"Cattle Supplement Details"}
        bgnone
      />

      {/* <!--====== Supplement Section Start ======--> */}
      <section className="product-section section-gap">
        <div className="container">
          <div
            className="product-info-box"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <div className="product-photo" style={{ flex: "0 0 100%", maxWidth: "500px" }}>
              <img
                src="assets/img/doctors/SantiX.jpg"
                alt="Sanvorm"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
              />
            </div>

            <div className="product-description" style={{ flex: 1 }}>
              <div className="description-header" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <h3 className="name">SantiX Soap</h3>
                  <span className="specialty">Tick & Flea Control with Skin Soothing</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>SantiX Soap</strong>is a specially formulated veterinary medicated soap that combines the powerful ectoparasitic properties of Permethrin with the skin-soothing benefits of Aloe Vera. Designed for pets and livestock, it effectively eliminates ticks, fleas, lice, and other ectoparasites, providing lasting protection and relief from itching. Its gentle soap base makes it suitable for regular use on cattle, dogs, goats, and other animals, keeping their skin healthy and their coat clean and shiny.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default SantiX;
