import React, {Component} from "react";

class HowCanHelp extends Component {
    render() {
        return (
            <section className="section pb-0 cm-how-can-help cm-how-can-help-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="block mb-30">
                                <div className="context">
                                    <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/features/04.png'} alt="" />
                                    <h4 className="text-dark font-w-700">Exceptional skills</h4>
                                    <p className="mt-15">Our skilled artisans meticulously craft each detail, ensuring every project reflects our commitment to quality and enduring beauty, surpassing industry standards with unparalleled precision and expertise</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block mb-30">
                                <div className="context">
                                    <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/features/05.png'} alt="" />
                                    <h4 className="text-dark font-w-700">Customer Satisfaction</h4>
                                    <p className="mt-15">Your satisfaction is our top priority. We listen to your needs, address concerns promptly, and strive to exceed your expectations, ensuring a seamless construction experience and a final product that surpasses your vision.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="block mb-30">
                                <div className="context">
                                    <img className="mb-25" src={process.env.PUBLIC_URL + '/assets/images/features/06.png'} alt="" />
                                    <h4 className="text-dark font-w-700">Timely Delivery</h4>
                                    <p className="mt-15">With meticulous planning and streamlined processes, we adhere to strict timelines, ensuring prompt project completion without compromising quality, providing peace of mind and value for your investment.</p>
                                </div>
                            </div>
                            {/* how-can-help item */}
                        </div>

                        <div className="col-12 mt-70">
                            <div className="border-bottom" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowCanHelp;