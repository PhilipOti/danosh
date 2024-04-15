import React, {Component} from "react";


class ContactUs extends Component {
    render() {
		return (
			<div id="contactus" className="container h-100 mt-5 mb-5">
			<div className="row h-100 align-items-center">
				<div className="col-lg-6">
					<div className="block text-dark">
						<h2 className="display-4">DANOSH BUILDERS LIMITED</h2>
						<p className="lead mt-25 mb-35">Building dreams together</p>
					</div>
				</div>
				<div className="col-lg-6 mt-5 mt-lg-0">
					<div className="banner-form bg-white p-4">
						<h4 className="text-dark">CONTACT US TODAY</h4>
						<p className="mt-10">Call - (+254) 790375845 or Email Us at agreybwana@danoshconstructors.org</p>
						<form>
							<input type="text" className="form-control rounded-0 shadow-none bg-light-gray mt-20" placeholder="Name" />
							<div className="row">
								<div className="col-md-6">
									<input type="email" className="form-control rounded-0 shadow-none bg-light-gray mt-20" placeholder="Email" />
								</div>
								<div className="col-md-6">
									<input type="phone" className="form-control rounded-0 shadow-none bg-light-gray mt-20" placeholder="Phone" />
								</div>
							</div>

							<div className="mt-20">
								<select className="w-100 rounded-0">
									<option disabled defaultValue="">Choose Your Product</option>
									<option defaultValue="1">Computer</option>
									<option defaultValue="2">Laptop</option>
									<option defaultValue="3">Mobile</option>
								</select>
							</div>

							<textarea className="form-control rounded-0 shadow-none bg-light-gray mt-85" placeholder="Message" />
							<button type="submit" className="btn btn-primary mt-25">Contact Us</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		)
	}

}

export default ContactUs