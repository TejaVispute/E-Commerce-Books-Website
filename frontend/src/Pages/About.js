import React from 'react'

const About = () => {
    return (
        <div classNameName='about-us-container'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <img src="https://img.freepik.com/premium-vector/happy-funny-girl-skateboard-pushing-supermarket-shopping-cart-full-books-flat-style-vector_539892-113.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className="display-6 fw-bold lh-1 mb-3">We are the fastest growing book seller over the world</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt ratione temporibus consequuntur itaque accusamus aliquid nihil aperiam dolorem dicta delectus assumenda, quod facere quidem eligendi illo odio vero ad.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Explore</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;