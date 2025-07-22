import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Mastisid = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Mastisid Powder"}
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
                src="assets/img/doctors/mastisid.jpg"
                alt="Mastisid Powder"
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
                  <h3 className="name">Mastisid Powder</h3>
                  <span className="specialty">Mastitis Management & Udder Health Support</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Mastisid</strong> is a powerful veterinary powder designed to treat subclinical and chronic mastitis in dairy animals. Enriched with Potassium Iodide, Multivitamins (including Vitamin C), Enzymes, and Amino Acids, it strengthens immunity and promotes faster healing of udder infections.

This formulation is effective in managing udder swelling, blood or pus discharge from teats, and reduces somatic cell count, leading to healthier milk production. It also supports recovery from viral infections like lumpy skin disease and foot-and-mouth disease.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Mastisid;
