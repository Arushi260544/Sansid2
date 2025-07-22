import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sancool = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sancool Powder"}
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
                src="assets/img/doctors/Sancool.jpg"
                alt="Sancool Powder"
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
                  <h3 className="name">Sancool Powder</h3>
                  <span className="specialty">Heat Stress Relief & Hydration Support</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sancool Powder</strong> is a scientifically formulated electrolyte and cooling feed supplement for cattle and poultry that provides powerful relief from heat stress, dehydration, and panting during high temperatures. Enriched with vital ingredients like Dextrose, Water Soluble Carbohydrates, Calcium Lactate, Vitamin C, Potassium Chloride, Magnesium Sulphate, and probiotics (Lacto Bacillus Sporogenes), it helps maintain hydration, regulate body temperature, and support recovery from heat-related fatigue. The inclusion of EDTA as a chelating agent ensures better absorption of nutrients, while the mango flavor ensures palatability.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sancool;
