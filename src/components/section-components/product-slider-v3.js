import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";

class ProductSliderV3 extends Component {
   render() {
      let publicUrl = process.env.PUBLIC_URL + "/";

      return (
         <div
            className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70"
            data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
         >
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Team</h6>
                        <h4>Meet our experienced and dedicated agents and staff:</h4>
                     </div>
                  </div>
               </div>
               <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
                  <div className="col-lg-6">
                     <div className="ltn__search-by-place-item">
                        <div className="search-by-place-img" style={{ width: "100%", height: "20rem" }}>
                           <img
                              src={publicUrl + "Image-1.jpg"}
                              alt="#"
                              style={{ height: "100%", width: "100%", backgroundSize: "fill" }}
                           />
                        </div>
                        <div className="search-by-place-info">
                           <h4>Mr. Wisdom Ebise</h4>
                           <div className="search-by-place-btn">Founder</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="ltn__search-by-place-item">
                        <div className="search-by-place-img" style={{ width: "100%", height: "20rem" }}>
                           <img
                              src={publicUrl + "Image-2.jpg"}
                              alt="#"
                              style={{ height: "100%", width: "100%", backgroundSize: "fill" }}
                           />
                        </div>
                        <div className="search-by-place-info">
                           <h4>Mr Wisdom Solomon Owuogba</h4>
                           <div className="search-by-place-btn">Executive Advisor</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default ProductSliderV3;
