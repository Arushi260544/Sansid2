import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${sidebarTrigger ? "show-panel" : ""
        }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            Sansid Pharma Pvt. Ltd. is a veterinary healthcare company based in Pune, Maharashtra.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title"></h5>
          <ul>

            <li>
              <i className="far fa-envelope-open" />
              <a href=""> sansidpharma@gmail.com</a>
              <a href=""></a>
            </li>
            {/* <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">+012 (345) 678 99</a>
              <br />
              <a href="tel:+8563214">+8563214</a>
            </li> */}
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default SlidePanel;
