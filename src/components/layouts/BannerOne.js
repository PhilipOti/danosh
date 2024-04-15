import React, {Component} from "react";
import {Link} from "react-router-dom";

class BannerOne extends Component {
    render() {
        return (
            <div className="cm-banner overlay bg-cover" style={{backgroundImage: "url(assets/images/bg-banner.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="block text-white">
                                <h3 className="mb-15">Mobile & Computer</h3>
                                <h2 className="display-3">Repair Service</h2>
                                <p className="lead mt-25 mb-35">Instrument cultivated alteration any favourable expression law far nor. Both new like tore but yaer. </p>
                                <Link className="btn btn-primary mt-10 mr-3 mr-md-4 initiate-scripts" to={'/services'}>Appointment</Link>
                                <Link className="btn btn-light mt-10 initiate-scripts" to={'/services'}>get a quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerOne;