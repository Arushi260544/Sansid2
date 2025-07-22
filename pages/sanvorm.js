import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Sanvorm = () => {
  return (
    <Layouts>
      <PageBanner
        title={"Sanvorm"}
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
                src="assets/img/doctors/Sanvorm.jpg"
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
                  <h3 className="name">Sanvorm</h3>
                  <span className="specialty">Broad-Spectrum Dewormer for Livestock</span>
                </div>
              </div>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                <strong>Sanvorm</strong> is a highly effective veterinary deworming supplement formulated with Ivermectin IP (120 mg) and Fenbendazole, designed to eliminate internal and external parasites in livestock. It targets and kills tapeworms, roundworms, and other harmful worms that affect the health, growth, and productivity of animals. Sanvorm improves overall animal wellness by enhancing immunity, promoting healthy and shiny skin and coat, and preventing hair loss. It also contributes to increased milk production and better nutrient absorption. The supplement is safe for kids (young animals), with the recommended dose being 1 tablet per 30 kg body weight, and a general usage measure of 1 gram per 4.2 kg body weight. Available in 120 mg bolus and 10-tablet Kids Steep packs, Sanvorm is an essential part of any livestock health regimen to ensure deworming, parasite control, and optimum animal performance. Always use as directed by a veterinary professional for best results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Supplement Section End ======--> */}
    </Layouts>
  );
};

export default Sanvorm;
