import React, {Component} from "react";
import HeaderTwo from "./layouts/HeaderTwo";
import BannerTwo from "./layouts/BannerTwo";
import HowCanHelp from "./layouts/HowCanHelp";
import AboutArea from "./layouts/AboutArea";
import WorkGallery from "./layouts/WorkGallery";
import WhyChooseUs from "./layouts/WhyChooseUs";
import Cta from "./layouts/Cta";
import Footer from "./layouts/Footer";
import ContactUs from "./layouts/ContactUs";


class HomeTwo extends Component {
    render() {
        return (
            <>

                <HeaderTwo />
                <BannerTwo />
                <HowCanHelp />
                <AboutArea design={'home_2'} />
                {/* about area = aboutus setion */}
                <WorkGallery />
                {/* work gallery=what we do section */}
                <WhyChooseUs />
                <Cta />
                <ContactUs />


                <Footer />
            </>
        );
    }
}

export default HomeTwo;