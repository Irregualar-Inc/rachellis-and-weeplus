import React from "react";

const TestimonialV3 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9 go-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Our Testimonial
              </h6>
              <h1 className="section-title">
                Don't just take our word for it! Our clients say:
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1">
              <div className="ltn__testimonial-item-5">
                <div className="ltn__quote-icon">
                  <i className="far fa-comments" />
                </div>
                <div className="ltn__testimonial-image">
                  <img
                    src={publicUrl + "testimonial2.png"}
                    alt="quote"
                    style={{ opacity: 0, height: ".5px" }}
                  />
                </div>
                <div className="ltn__testimonial-info">
                  <p>
                    RACHELLIS AND WEE-plus GROUP made our home buying process
                    seamless! Their dedicated professionals guided us through
                    every step, ensuring we found the perfect home. With their
                    market expertise, insightful advice, and transparent
                    communication, the entire process was efficient and
                    stress-free. We highly recommend RACHELLIS AND WEE-plus
                    GROUP for their professionalism, dedication, and exceptional
                    service.
                  </p>
                  <h4>Mr. Tunji</h4>
                </div>
              </div>
              <div className="ltn__testimonial-item-5">
                <div className="ltn__quote-icon">
                  <i className="far fa-comments" />
                </div>
                <div className="ltn__testimonial-image">
                  <img
                    src={publicUrl + "testimonial2.png"}
                    alt="quote"
                    style={{ opacity: 0, height: ".5px" }}
                  />
                </div>
                <div className="ltn__testimonial-info">
                  <p>
                    RACHELLIS AND WEE-plus GROUP went above and beyond for us!
                    Their team provided exceptional service, guiding us through
                    every step of the home buying process. They addressed all
                    our questions with patience and clarity, ensuring we felt
                    confident in our decisions. With their expertise and
                    dedication, the experience was smooth and enjoyable. We
                    highly recommend RACHELLIS AND WEE-plus GROUP for their
                    outstanding commitment and support.
                  </p>
                  <h4>Ethan James</h4>
                </div>
              </div>
            </div>
            <ul className="ltn__testimonial-quote-menu d-none d-lg-block">
              <li>
                <img
                  src={publicUrl + "testimonial2.png"}
                  alt="Quote image"
                  style={{ opacity: 0, height: "0%" }}
                />
              </li>
              <li>
                <img
                  src={publicUrl + "testimonial2.png"}
                  alt="Quote image"
                  style={{ opacity: 0, height: "0%" }}
                />
              </li>
              {/* <li><img src={publicUrl+"testimonial.jpg"} alt="Quote image" /></li>
              <li><img src={publicUrl+"testimonial.jpg"} alt="Quote image" /></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialV3;
