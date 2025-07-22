import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const MastisidPowder = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Mastisid Powder"}
        pageName={"Veterinary Supplement Details"}
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
                src="assets/img/doctors/sansid_pages-to-jpg-0003.jpg"
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
                  <h3 className="name">Mastisid Powder</h3>
                  <span className="specialty">Mastitis Treatment & Udder Health</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Mastisid Powder</strong> is a scientifically formulated veterinary supplement enriched with Potassium Iodide, multivitamins, Vitamin C, enzymes, amino acids, antioxidants, and minerals to effectively treat and prevent mastitis and viral diseases like lumpy skin, foot and mouth disease in dairy cattle. It helps in curing sub-clinical and chronic mastitis by reducing swelling, preventing pus and blood discharge from the udder, and improving the taste and quality of milk. The supplement promotes udder growth, enhances immunity, supports faster recovery from infections, and acts as a powerful adjunct to antibiotic therapy. It effectively fills the deficiency of milk in the udder, eliminates inflammation and internal wounds, and boosts milk yield. Recommended for both treatment (50 gm twice a day for 3–4 days) and prevention (50 gm weekly before and after calving), Mastisid Powder ensures overall udder health and productivity. Packaged conveniently in 2x50 gm (100 gm) sachets, it is an essential solution for dairy farmers aiming to maintain healthy and high-yielding livestock.


              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default MastisidPowder;
