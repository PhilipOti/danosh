import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutArea extends Component {
    render() {
        const imagePart = (
            <div className="col-lg-6 col-md-8">
                <div className="pr-0 pr-lg-5">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/danosh/aboutsection1.jpg'} alt="about" />
                </div>
            </div>
        );

        const descPart = (
            <div className="col-lg-6 col-md-10">
                <div className={this.props.design === 'home_1' ? 'block text-center mt-5 mt-lg-0' : 'block'}>
                    <h2 className="h1 text-dark">About Us: Crafting Excellence in Construction</h2>
                    <p className="mt-25">At DANOSH BUILDERS LIMITED, we are more than just builders - we are creators of enduring spaces that inspire, innovate, and elevate communities. With a legacy of excellence since our inception, we have established ourselves as a premier construction company committed to delivering exceptional craftsmanship and unparalleled service.</p>
                    <p className="mt-25">
                    What sets us apart is our unwavering commitment to quality, integrity, and client satisfaction. Every project, regardless of scale or complexity, is approached with meticulous attention to detail and a dedication to surpassing industry standards. We pride ourselves on our ability to transform visions into reality, collaborating closely with clients to bring their ideas to life while adhering to timelines and budgetary considerations.
                    </p>
                    <p className="mt-25">Whether you are embarking on a new construction project or renovating an existing space, DANOSH BUILDERS LIMITED is here to be your trusted partner every step of the way. We invite you to experience the difference of working with a construction company that prioritizes craftsmanship, integrity, and client satisfaction above all else. Together, let's build a better future, one project at a time.</p>
                    <Link to={'/services'} className="btn btn-primary mt-30 initiate-scripts">learn more</Link>
                </div>
            </div>
        )
        return (
            <section id="aboutus" className={this.props.design === 'home_1' ? 'section cm-about-us pt-80' : 'section cm-about-us'}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        {this.props.design === 'home_1' ? (
                            <>
                                {imagePart}
                                {descPart}
                            </>
                        ) : (
                            <>
                                {descPart}
                                {imagePart}
                            </>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutArea;