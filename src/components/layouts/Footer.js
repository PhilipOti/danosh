import React, {Component} from "react";
import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Footer extends Component {
    render() {
        return (
            <>
                {/* start footer */}
                <footer className="footer section bg-cover overlay-dark pt-60">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-md-6 mt-40">
                                <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/danosh/danosh_logo_2.png'} alt="" />
                                <p className="text-gray">
                                    Building Dreams.
                                </p>
                                <ul className="social-links list-unstyled mt-25">
                                    <li><Link to={'/services'} className="initiate-scripts"><span className="fab fa-facebook-f" /></Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts"><span className="fab fa-twitter" /></Link></li>
                                    <li><Link to={'/services'} className="initiate-scripts"><span className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-40">
                                <h4 className="font-w-600 text-white mb-10">Quick Links</h4>
                                <ul className="footer-links list-unstyled text-uppercase">
                                    <li><HashLink to="#aboutus" className="initiate-scripts">About Us</HashLink></li>
                                    <li><HashLink to="#contactus" className="initiate-scripts">Contact Us</HashLink></li>
                                    <li><HashLink to="whyooseus" className="initiate-scripts">Why Choose us</HashLink></li>
                                </ul>
                            </div>
                            <div className="col-xl-4 col-md-6 mt-40">
                                <h4 className="font-w-600 text-white mb-10">Get in touch</h4>
                                <div className="text-gray mt-20">
                                    <span className="icon text-primary fas fa-phone-alt mr-2" />
                                    +254790375845
                                </div>
                                <div className="text-gray mt-20">
                                    <span className="icon text-primary fas fa-envelope mr-1" />
                                    agreybwana@danoshconstructors.org
                                </div>
                                <div className="text-gray mt-20">
                                    <span className="icon text-primary fas fa-home mr-2" />
                                    Nairobi, kenya
                                </div>
                                <form className="mt-25" method="post">
                                    <div className="input-group input-group-primary">
                                        <input type="email" className="form-control text-white px-3 bg-transparent shadow-none border-0" placeholder="Mail address" />
                                        <div className="input-group-apend">
                                            <button className="btn btn-primary rounded-circle" type="submit">
                                                <span className="fas fa-chevron-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>Copyright © 2024. DANOSH BUILDER LIMITED </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end footer */}

                <a href="#top" className="scroll-to-top">
                    <span className="fas fa-chevron-up" />
                </a>
                {/* scroll to top */}
            </>
        );
    }
}

export default Footer;