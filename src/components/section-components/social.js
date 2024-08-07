import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a href="https://www.facebook.com" title="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" title="Twitter">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" title="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" title="Linkedin">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          {/* <li><a href="https://www.dribble.com/" title="Dribbble"><i className="fab fa-dribbble" /></a></li> */}
        </ul>
      </div>
    );
  }
}

export default Social;
