import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sanmac12 = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sanmac 12"}
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
                src="assets/img/doctors/Sanmac12.jpg"
                alt="Sanmac 12"
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
                  <h3 className="name">Sanmac 12</h3>
                  <span className="specialty">Broad-Spectrum Dewormer for Livestock</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sanmac 12 Injection</strong>  is a high-potency Methylcobalamin (Vitamin B12) veterinary injectable supplement, formulated to treat and prevent B12 deficiency in cattle, goats, sheep, horses, and other livestock. Each ml contains 2500 mcg of Methylcobalamin, a bioactive form of Vitamin B12 essential for supporting nervous system health, red blood cell formation, improved metabolism, and faster recovery from weakness, stress, and anemia. It is also effective in treating neuropathy, reproductive issues, and general debility caused by poor nutrition or illness. The formulation includes 2% Benzyl Alcohol as preservative and sterile water for injection, and it is safe for IM/IV administration as directed by a veterinarian. With zero withdrawal period for both meat and milk, Sanmac 12 is ideal for dairy and meat-producing animals. Available in a 30 ml multidose vial, it is a trusted solution to restore vitality and improve the overall performance of your livestock.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sanmac12;
