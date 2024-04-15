import React, {Component} from "react";
import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class HeaderTwo extends Component {
    render() {
        return (
            <header className="cm-header cm-header-2">
                <div className="header px-0 px-md-5">
                    <div className="container-fluid h-100">
                        <div className="row h-100 align-content-center">
                            <div className="col-md-12">
                                <nav className="navbar navbar-expand-lg navbar-light px-0">
                                    <Link className="navbar-brand initiate-scripts" to={'/home-one'}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/danosh/danosh_logo_2.png'} alt="logo" />
                                    </Link>
                                    <button
                                        className="navbar-toggler border-0 p-0"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navLinks"
                                        aria-controls="navLinks"
                                        aria-expanded="false">

                                        <span className="navbar-toggler-icon" />
                                    </button>

                                    <div className="collapse navbar-collapse" id="navLinks">
                                        <ul className="navbar-nav mx-auto align-items-center">
                                            <li className="nav-item">
                                                <Link className="nav-link initiate-scripts" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="nav-link initiate-scripts" to="#aboutus">About Us</HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="nav-link initiate-scripts" to="#whatwedo">What We Do</HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="nav-link initiate-scripts" to="#whychooseus">Why Choose Us</HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="nav-link initiate-scripts" to="#contactus">Contact Us</HashLink>
                                            </li>

                                        </ul>
                                        <div className="block d-flex align-items-center mt-3 mt-lg-0">
                                            <Link to={'/services'} className="btn btn-sm btn-primary d-none d-xl-block ml-5 initiate-scripts">Get a quote</Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderTwo;