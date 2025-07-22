import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sanplus = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sanplus-SP"}
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
                src="assets/img/doctors/sanplus.jpg"
                alt="Sanplus-SP"
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
                  <h3 className="name">Sanplus-SP</h3>
                  <span className="specialty">Anti-inflammatory, Analgesic, Antispasmodic & Antipyretic</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sanplus-SP</strong> is a comprehensive veterinary solution formulated to relieve pain, inflammation, fever, and muscular spasms in animals. This dual formulation is available in both injection and bolus forms. The injection contains a powerful combination of Paracetamol, Piroxicam, and antispasmodic agents like Pitofenone HCl and Fenpiverinium Bromide, offering rapid relief from fever, pain, and colic symptoms. It effectively supports treatment in conditions such as mastitis, metritis, lameness, fever, and respiratory issues.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sanplus;
