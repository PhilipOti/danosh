import React, {Component} from "react";

class WhyChooseUs extends Component {
    render() {
        return (
            <section id="whychooseus" className="section why-choose-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="pr-0 pr-lg-2">
                                <h2 className="section-heading h1 text-dark">Why Choose Us</h2>
                                <p className="mt-30">
                                At DANOSH BUILDERS LIMITED, we don't just construct buildings; we craft experiences. From residential to commercial projects, we bring a blend of creativity, expertise, and dedication to every endeavor, ensuring unparalleled results that stand the test of time.
                                </p>
                                <p className="mt-20">
                                What sets us apart is our relentless pursuit of perfection. From the initial concept to the final touch, we approach each project with unwavering attention to detail, ensuring every aspect meets our exacting standards of craftsmanship and excellence.
                                </p>
                                <p className="mt-20">
                                Whether you're planning a new construction project or renovating an existing space, DANOSH BUILDERS LIMITED is here to turn your vision into reality. Join us in building a better tomorrow, one project at a time.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="row masonry">
                                <div className="col-sm-6">
                                    <div className="block text-center">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/03.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Skill</h4>
                                        <p className="mt-20">Our dedication to superior craftsmanship ensures every project reflects precision, quality, and attention to detail, exceeding industry standards and your expectations.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="block text-center mt-30">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/04.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Experience</h4>
                                        <p className="mt-20">With 5+ years of industry experience and a diverse portfolio of successful projects, we have earned a reputation for reliability, professionalism, and excellence in execution.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="block text-center mt-30">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/05.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Quality</h4>
                                        <p className="mt-20">Quality is ingrained in everything we do. From materials selection to craftsmanship, we adhere to the highest standards, ensuring durability, longevity, and enduring value for your investment</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="block text-center mt-30">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/why-choose-us/06.png'} alt="" />
                                        </div>
                                        <h4 className="mt-25 text-dark">Guarantees</h4>
                                        <p className="mt-20">Your satisfaction is our priority. We listen, collaborate, and tailor solutions to your unique needs, ensuring a seamless and personalized construction experience from start to finish.</p>
                                    </div>
                                    {/* why choose us item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;