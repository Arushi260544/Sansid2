import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sidplex = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sidplex"}
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
                src="assets/img/doctors/sidplex.jpg"
                alt="Sanmmin Powder"
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
                  <h3 className="name">Sidplex</h3>
                  <span className="specialty">Multivitamin & Mineral Supplement for Cattle</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sidplex Injection</strong> is a potent Vitamin B-Complex formulation developed specifically for veterinary use to support the overall health, energy metabolism, and recovery in livestock. Each ml of Sidplex contains a scientifically balanced mix of essential B-vitamins including Thiamine (B1), Riboflavin (B2), Pyridoxine (B6), Cyanocobalamin (B12), Niacinamide (B3), and D-Panthenol, which play a vital role in enhancing appetite, nervous system function, growth, and immunity. It is ideal for animals recovering from illness, stress, parasitic infections, antibiotic treatments, or poor nutrition. Administered via IM or IV routes as per veterinarian direction, Sidplex supports faster recovery, improves feed utilization, and boosts vitality. It contains no withdrawal period for milk or meat, making it safe for lactating and meat-producing animals. Available in 30 ml and 100 ml multidose vials, Sidplex is a reliable, essential injectable solution for maintaining optimal animal health and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sidplex;
