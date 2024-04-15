import React, {Component} from "react";
import {Link} from "react-router-dom";

class WorkGallery extends Component {
    render() {
        return (
            <section id="whatwedo" className="section work-gallery bg-cover overlay-dark" style={{backgroundImage: "url(assets/images/bg-services.jpg)"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 text-center">
                            <h2 className="section-heading h1 text-white mb-50">WHAT WE DO</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-fluid">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-md-12">
                            <div className="owl-carousel fluid-carousel">
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/danosh/roofingimage.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Roofing Works</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/danosh/paintimage.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Painting Works</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/danosh/tilesimage.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Tiling Works</Link>
                                </div>
                                {/* work-item */}
                                <div className="work-item">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/danosh/flooringimage.jpg'} alt="" />
                                    <Link to={'/services'} className="btn btn-sm btn-light initiate-scripts">Flooring Works</Link>
                                </div>                                
                              
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkGallery;