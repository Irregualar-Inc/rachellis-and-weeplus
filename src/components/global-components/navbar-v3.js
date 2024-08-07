/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";

export const NavbarV3 = () => {
   const navbar = [
      { name: "Home", href: "/" },
      { name: "About Us", href: "#about" },
      { name: "Privacy & Policy", href: "#" },
   ];

   let publicUrl = process.env.PUBLIC_URL + "/";

   return (
      <div>
         <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
            <div className="ltn__header-top-area top-area-color-white">
               <div className="container">
                  <div className="row">
                     <div className="col-md-9">
                        <div className="ltn__top-bar-menu">
                           <ul>
                              <li>
                                 <a href="mailto:info@rachellisandweeplusgroup.com?Subject=Enquiry">
                                    <i className="icon-mail" /> info@rachellisandweeplusgroup.com
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="icon-placeholder" />
                                    Esther Complex after I-fitness Gym, Badore Road, Ajah, Lekki, Lagos
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-3">
                        <div className="top-bar-right text-end">
                           <div className="ltn__top-bar-menu">
                              <ul>
                                 <li>
                                    {/* ltn__language-menu */}
                                    <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                       <ul>
                                          <li>
                                             <Link to="#" className="dropdown-toggle">
                                                <span className="active-currency">English</span>
                                             </Link>
                                             <ul>
                                                <li>
                                                   <Link to="#">English</Link>
                                                </li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </div>
                                 </li>
                                 <li>
                                    <Social />
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <div className="site-logo-wrap">
                           <div className="site-logo go-top">
                              <Link to="/">
                                 <img src={`${publicUrl}logo.svg`} alt="Logo1" style={{ width: "70px" }} />
                              </Link>
                           </div>
                           <div className="get-support clearfix d-none">
                              <div className="get-support-icon">
                                 <i className="icon-call" />
                              </div>
                              <div className="get-support-info">
                                 <h6>Get Support</h6>
                                 <h4>
                                    <a href="tel:+2349022065478">+2349022065478</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col header-menu-column menu-color-white">
                        <div className="header-menu d-none d-xl-block go-top">
                           <nav>
                              <div className="ltn__main-menu">
                                 <ul>
                                    {navbar.map((item, idx) => {
                                       const { name, href } = item;
                                       return (
                                          <li key={idx}>
                                             <a href={href}>{name}</a>
                                          </li>
                                       );
                                    })}
                                    <li className="special-link">
                                       <a href="mailto:info@rachellisandweeplusgroup.com?subject=Enquiry">Make An Enquiry</a>
                                    </li>
                                 </ul>
                              </div>
                           </nav>
                        </div>
                     </div>
                     <div className="col--- ltn__header-options ltn__header-options-2 ">
                        {/* Mobile Menu Button */}
                        <div className="mobile-menu-toggle d-xl-none">
                           <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                              <svg viewBox="0 0 800 600">
                                 <path
                                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                    id="top"
                                 />
                                 <path d="M300,320 L540,320" id="middle" />
                                 <path
                                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                    id="bottom"
                                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                                 />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
            <div className="ltn__utilize-menu-inner ltn__scrollbar">
               <div className="ltn__utilize-menu-head">
                  <div className="site-logo">
                     <Link to="/">
                        <img src={`${publicUrl}logo2.svg`} alt="Logo1" style={{ width: "70px" }} />
                     </Link>
                  </div>
                  <button className="ltn__utilize-close">×</button>
               </div>
               <div className="ltn__utilize-menu">
                  <ul>
                     {navbar.map((item, idx) => {
                        const { name, href } = item;
                        return (
                           <li key={idx}>
                              <a href={href}>{name}</a>
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div className="ltn__social-media-2">
                  <ul>
                     <li>
                        <a href="#" title="Facebook">
                           <i className="fab fa-facebook-f" />
                        </a>
                     </li>
                     <li>
                        <a href="#" title="Twitter">
                           <i className="fab fa-twitter" />
                        </a>
                     </li>
                     <li>
                        <a href="#" title="Linkedin">
                           <i className="fab fa-linkedin" />
                        </a>
                     </li>
                     <li>
                        <a href="#" title="Instagram">
                           <i className="fab fa-instagram" />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NavbarV3;
