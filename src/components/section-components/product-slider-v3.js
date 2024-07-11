import React from "react";

const ProductSliderV3 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  const team = [
    { name: "Mr. Wisdom Ebise", position: "Founder", image: "Image-1.jpg" },
    {
      name: "Mr. Wisdom Solomon Owuogba",
      position: "Executive Advisor",
      image: "Image-2.jpg",
    },
  ];

  return (
    <div
      className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70"
      data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Our Team
              </h6>
              <h2>Meet our experienced and dedicated agents and staff:</h2>
            </div>
          </div>
        </div>
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
          {team.map((item, idx) => {
            const { name, position, image } = item;
            return (
              <div className="col-lg-6">
                <div className="ltn__search-by-place-item">
                  <div
                    className="search-by-place-img"
                    style={{ width: "100%", height: "20rem" }}
                  >
                    <img
                      src={publicUrl + image}
                      alt="#"
                      style={{
                        height: "100%",
                        width: "100%",
                        backgroundSize: "fill",
                      }}
                    />
                  </div>
                  <div className="search-by-place-info">
                    <h4>{name}</h4>
                    <div className="search-by-place-btn">{position}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderV3;
