import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sanvitam = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sanvitam-H"}
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
                src="assets/img/doctors/Sanvitam-H.jpg"
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
                  <h3 className="name">Sanvitam-H</h3>
                  <span className="specialty">Milk Production Booster & Udder Health Support</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sanvitam-H</strong> is a powerful multivitamin and mineral feed supplement formulated to enhance milk production, udder health, and overall vitality in cattle and poultry. Enriched with essential nutrients like Vitamin A, D3, E, Biotin (H), Vitamin C, B12, Zinc, Selenium, Copper, and Cobalt, Sanvitam-H supports the full development of milk-producing cells, strengthens udder tissues, and improves milk secretion and retention. It also strengthens the walls and capillaries of the udder, revitalizes damaged tissues, promotes regeneration of milk glands, and aids in treating conditions like mastitis and teat canal infections. The supplement improves the taste and nutritional quality of milk while also enhancing animal immunity and metabolic functions. With consistent use, it provides visible results in udder firmness, milk yield, and overall lactation performance.
                Recommended dose: 10 ml daily for 25 days (or as advised by your veterinarian).
                Available in: 100 ml, 250 ml, 500 ml, 1 liter, and 5-liter bottles, Sanvitam-H is an essential addition to every dairy farms health program.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sanvitam;
