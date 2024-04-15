import React, {Component} from "react";

class Features extends Component {
    render() {
        return (
            <div className="cm-features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="block d-flex align-items-center">
                                    <span className="icon bg-primary">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/features/01.png'} alt="" />
                                    </span>
                                <div>
                                    <h4 className="text-dark mb-10">Low Price Guarantee</h4>
                                    <p>John draw real poor</p>
                                </div>
                            </div>
                            {/* features item */}
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="block d-flex align-items-center">
                                    <span className="icon bg-primary">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/features/02.png'} alt="" />
                                    </span>
                                <div>
                                    <h4 className="text-dark mb-10">Trust Our Experience</h4>
                                    <p>John draw real poor</p>
                                </div>
                            </div>
                            {/* features item */}
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="block d-flex align-items-center">
                                    <span className="icon bg-primary">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/features/03.png'} alt="" />
                                    </span>
                                <div>
                                    <h4 className="text-dark mb-10">1 Year Warranty</h4>
                                    <p>John draw real poor</p>
                                </div>
                            </div>
                            {/* features item */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;