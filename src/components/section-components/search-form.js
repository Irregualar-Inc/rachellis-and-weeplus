import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class SearchForm extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__car-dealer-form-tab">
                <div className="ltn__tab-menu  text-uppercase d-none">
                  <div className="nav">
                    <a
                      className="active show"
                      data-bs-toggle="tab"
                      href="#ltn__form_tab_1_1"
                    >
                      <i className="fas fa-car" />
                      Find A Car
                    </a>
                    <a data-bs-toggle="tab" href="#ltn__form_tab_1_2">
                      <i className="far fa-user" />
                      Get a Dealer
                    </a>
                  </div>
                </div>
                <div className="tab-content bg-white box-shadow-1 position-relative pb-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
