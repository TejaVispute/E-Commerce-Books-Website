import React from 'react'
import '../Pages css/footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div id='footer' className=' mt-5  text-light p-4' style={{backgroundColor:"#172337"}}>


            {/* <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}


            {/* Footer starts from here */}
            {/* <section id="footer" className='foot'> */}
            {/* <footer class="bg-light py-5"> */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase">Company</h5>
                        <ul class="list-unstyled mb-0">
                            <li><Link className=''>About Us</Link></li>
                            <li><Link>Contact Us</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase">Shop</h5>
                        <ul class="list-unstyled mb-0">
                            <li><Link>Products</Link></li>
                            <li><Link>Shipping Information</Link></li>
                            <li><Link>Returns & Exchanges</Link></li>
                            <li><Link>FAQs</Link></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase">Connect with Us</h5>
                        <ul class="list-unstyled mb-0 text-light">
                            <li><Link>Facebook</Link></li>
                            <li><Link>Twitter</Link></li>
                            <li><Link>Instagram</Link></li>
                            <li><Link>YouTube</Link></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase">Newsletter</h5>
                        <p>Sign up for our newsletter to get the latest news, updates, and promotions.</p>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                            </div>
                            <button type="submit" class="btn btn-secondary mt-3">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-6">
                        <p class="text-muted">&copy; 2023 My E-commerce Store. All rights reserved.</p>
                    </div>

                </div>
            </div>
            {/* </footer> */}

            {/* </section> */}

        </div>
    )
}
