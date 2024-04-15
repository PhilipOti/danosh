import React, {Component} from "react";
import {Link} from "react-router-dom";

class Cta extends Component {
    render() {
        return (
            <section className="section cm-cta bg-cover overlay-light" style={{backgroundImage: "url(assets/images/danosh/calltoactionbanner.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="text-dark">
                                <h1 className="mb-30 text-dark">Just Give Us a Call Today.</h1>

                            </div>
                            <Link to={'/services'} className="btn btn-primary initiate-scripts">Appointment</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;