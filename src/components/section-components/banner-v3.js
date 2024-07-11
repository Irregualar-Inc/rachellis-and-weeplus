import React, { Component } from "react";
import { Link } from "react-router-dom";

class BannerV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__slider-area ltn__slider-3  section-bg-2">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "background2.jpg"}
          >
            <div className="ltn__slide-item-inner text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
                          </a>
                        </div>
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          RACHELLIS AND WEE-plus GROUP
                        </h6>
                        <h3 className="slide-title animated ">Our Story</h3>
                        <div className="slide-brief animated">
                          <p>
                            Welcome to RACHELLIS AND WEE-plus GROUP, your
                            trusted partner in real estate and Automobiles . Our
                            journey began 4 years ago, founded on the principles
                            of integrity, expertise, and exceptional customer
                            service.
                          </p>
                        </div>
                        <div className="btn-wrapper animated go-top">
                          <Link
                            to="/contact"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerV3;
