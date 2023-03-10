import React from 'react'
import Carosel from '../Components/Carosel';
import { Featured } from '../Components/featured';
import ImportantFeatures from '../Components/ImportantFeatures';

import Products from '../Components/Products';


const Home = () => {

  return (
    <>


      <Carosel />
      <ImportantFeatures />
      <div className='container'>
        <hr />
        <h1 className='text-center fw-bolder'>Here are our some samples</h1>
        <hr />

      </div>
      <Products />

      {/* <Featured /> */}
    </>
  )
}

export default Home;
