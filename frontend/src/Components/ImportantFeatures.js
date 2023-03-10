import React from 'react'
import '../Components css/importantFeature.css'
const Important_Features = () => {

  // this is delivery securepayment verified product cards component
  return (
    <div className='container import_features'>

      <div className="all-content-wrapper">
        <div className="veicle-wrapper">
          <div className="veicleimg">
            <i class="fa-solid fa-truck"></i>
          </div>
          <div className="india-delivery">
            <strong>Pan india Delivery</strong>
            <div>No Minimum Order Value</div>
          </div>
        </div>
        <div className="veicle-wrapper">
          <div className="veicleimg">
            <i class="fa-regular fa-credit-card"></i>
          </div>
          <div className="india-delivery">
            <div><strong>Secure Payment</strong></div>
            <span>100% secure Payments</span>
          </div>
        </div>
        <div className="veicle-wrapper">
          <div className="veicleimg">
            <i class="fa-solid fa-certificate"></i>
          </div>
          <div className="india-delivery">
            <div><strong>Verified Products</strong></div>
            <span>Full Refund If Get Wrong Product</span>
          </div>
        </div>
        <div className="veicle-wrapper">
          <div className="veicleimg">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div className="india-delivery">
            <div> <strong>Quick Support</strong></div>
            <span>10.00 AM - 5.00 PM (Sunday Off)</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Important_Features