import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sanmminpowder = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sanmmin Powder"}
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
                src="assets/img/doctors/sansid_pages-to-jpg-0002.jpg"
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
                  <h3 className="name">Sanmmin Powder</h3>
                  <span className="specialty">Multivitamin & Mineral Supplement for Cattle</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sanmmin Powder</strong> is a high-quality chelated multivitamin and mineral supplement designed to boost the overall health, growth, and productivity of livestock such as cows, buffaloes, calves, goats, and sheep. It helps improve fertility, enhances milk yield and quality, supports faster growth, strengthens immunity, and prevents common issues like bloating and heat stress. Enriched with essential nutrients like calcium, phosphorus, zinc, copper, iron, vitamins A, D₃, E, biotin, lysine, and methionine, it effectively fulfills the dietary deficiencies in animals, ensuring better metabolism, stronger bones, improved reproductive health, and overall vitality. The recommended dosage is 40–60 grams daily for cows and buffaloes, and 20 grams for calves, heifers, goats, and sheep. Available in 1 kg, 5 kg, 10 kg, and 25 kg packs, Sanmmin Powder is ideal for daily feed supplementation and helps farmers maintain healthier, more productive livestock.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sanmminpowder;
