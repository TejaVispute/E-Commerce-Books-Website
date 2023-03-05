import React from 'react'
import Carosel from '../Components/Carosel';
import Nav from '../Components/Nav';
import Products from '../Components/Products';
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  let { user } = useAuth0();
  return (
    <>

      <Carosel />
      {user ? <Products /> : <h1>Please Login First </h1>}
    </>
  )
}

export default Home;
