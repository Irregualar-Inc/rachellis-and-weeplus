import React from "react";
import { Link } from "react-router-dom";

const FeaturesV1 = ({ customClass }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className={customClass} id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                About Us
              </h6>
              <h1 className="section-title">Our Vision, Mission, and Values</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__custom-gutter--- justify-content-center go-top">
          <div className="col-lg-7 col-sm-7 col-7">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
              <div className="ltn__feature-info">
                <h3>Vision Statement</h3>
                <p>
                  At RACHELLIS AND WEE-Plus GROUP, we envision a future where
                  everyone has access to Comfort, and where our communities are
                  built on a foundation of trust, sustainability, and
                  prosperity. We strive to be the leading company in Real estate
                  and Automobiles shaping the future of living and working
                  through innovation, integrity, and exceptional customer
                  experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-7 col-7">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
              <div className="ltn__feature-info">
                <h3>Mission Statement</h3>
                <p>
                  Our mission is to deliver exceptional services that exceed our
                  customers' expectations. We are dedicated to:
                </p>
                <ul>
                  <li>
                    Providing personalized and professional guidance throughout
                    every transaction
                  </li>
                  <li>
                    Offering a diverse portfolio of investment opportunities
                    that cater to diverse needs and preferences
                  </li>
                  <li>
                    Fostering long-term relationships built on trust,
                    transparency, and open communication
                  </li>
                  <li>
                    Embracing innovation and technology to enhance the
                    innovative experience
                  </li>
                  <li>
                    Supporting the well-being and growth of our employees,
                    customers, and the communities we serve
                  </li>
                </ul>
                <p>
                  By living our mission, we aim to make a positive impact on the
                  lives of those we touch, and to be the company of choice for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-7 col-7">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
              <div className="ltn__feature-info">
                <h3>Our Values</h3>
                <p>We live by:</p>
                <ul>
                  <li>Trust: Honesty and transparency in every interaction</li>
                  <li>
                    Expertise: Staying up-to-date on market trends and industry
                    knowledge
                  </li>
                  <li>
                    Customer Service: Prioritizing our clients' needs and
                    satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-7 col-7">
            <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white box-shadow-1">
              <div className="ltn__feature-info">
                <h3>Core Values</h3>
                <ul>
                  <li>F - Future oriented</li>
                  <li>A - Accountability</li>
                  <li>C - Creativity</li>
                  <li>E - Excellence</li>
                  <li>I - Integrity</li>
                  <li>T - Trust</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesV1;
