import React from "react";
import "../Pages css/contact.css";
function Contact() {
    return (
        <>
            <section className="container mt-5 mb-5">
                <div className="contact-wrapper flex gap-5">
                    <div className="left-contact-part">
                        <img
                            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80"
                            alt=""
                        />
                    </div>
                    <div className="right-contact-part">
                        <h1 className="fw-bold pb-3 ">Contact Us</h1>

                        <p className="pb-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
                            optio recusandae saepe. Magnam totam at, beatae quisquam cum error
                            saepe quae modi rerum harum rem necessitatibus nemo nam quibusdam
                            ullam similique deleniti fugit iusto inventore. Dicta, esse
                            corrupti? Deserunt, corporis.
                        </p>

                        <h4 className="fw-bolder">Address</h4>
                        <p>5th floor Balaji Appartment , Bhusawal India</p>

                        <h4 className="fw-bolder">Open Hours</h4>
                        <p>Daily 10.00 AM to 5.00 PM</p>
                        <h4 className="fw-bolder">Contact Info</h4>
                        <div>+91-2945656787</div>
                        <p>tejasvispute25@gmail.com</p>
                        <div>
                            <i class="fa-brands fa-facebook h4"></i>
                            <i class="fa-brands fa-instagram mx-4 h4"></i>
                            <i class="fa-brands fa-twitter h4"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
