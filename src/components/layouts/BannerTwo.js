import React, {Component} from "react";
import { HashLink } from "react-router-hash-link";

class BannerTwo extends Component {
    render() {
        return (
            <div className="owl-carousel banner-carousel">
                <div className="cm-banner overlay bg-cover" style={{backgroundImage: "url(assets/images/bannerimages/slider1.jpg)", backgroundPosition: "top"}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="block text-white text-center">
                                    <h3 className="mb-15">Your Trusted Construction Partner</h3>
                                    <h2 className="display-3">Building Dreams</h2>
                                    <p className="lead mt-25 mb-35">Transforming visions into reality with quality craftsmanship and trusted expertise. Your partner in construction excellence</p>
                                    <HashLink className="btn btn-primary mt-10 mr-3 mr-md-4 initiate-scripts" to="#contactus">Contact Us</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cm-banner overlay bg-cover" style={{backgroundImage: "url(assets/images/bannerimages/slider2.jpg)", backgroundPosition: "top"}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="block text-white text-center">
                                    <h3 className="mb-15">Your Premier Construction Solution</h3>
                                    <h2 className="display-3">Crafting Excellence</h2>
                                    <p className="lead mt-25 mb-35">Tailored construction solutions delivering unparalleled craftsmanship. Your go-to choice for excellence in building projects</p>
                                    <HashLink className="btn btn-primary mt-10 mr-3 mr-md-4 initiate-scripts" to="#contactus">Contact us</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerTwo;