import React, { useEffect } from 'react'
import BooksCard from '../Components/BooksCard';
import Carosel from '../Components/Carosel';
import { Featured } from '../Components/featured';
import ImportantFeatures from '../Components/ImportantFeatures';
import "../Pages css/Home.css"
import Products from '../Components/Products';
import { useBook } from '../Context/BookContext';
import { Link } from 'react-router-dom';
import SkletonLoad from '../Components/SkletonLoad';



const Home = () => {
  let { filter, setFilter, data, isLoading } = useBook();
  // console.log(isLoading)
  let filtered = data.filter((e) => e.categories === "comics");

  useEffect(() => {
    setFilter(filtered)
  }, [])


  // let cookie = Cookies.get('jwtauth');
  // console.log(cookie)

  let lodingstylle = {
    height: "85vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <>



      {

        isLoading ? <div className="Home-loader" style={lodingstylle}>
          <img width={60} src="https://uploads.toptal.io/blog/image/122376/toptal-blog-image-1489080120310-07bfc2c0ba7cd0aee3b6ba77f101f493.gif" alt="" />
        </div> : <div>

          <Carosel />
          <ImportantFeatures />
          <div className='container'>
            <hr />
            <h1 className='text-center fw-bolder'>Here are our some samples</h1>
            <hr />

          </div>

          <div id='home-samples-wrapper' className="container">

            <BooksCard filter={filter} />

          </div>


          <div className='explore-all container'>
            <h1>
              <Link to="/allbooks">  <button className='btn btn-outline-success'>Explore All Books By Categories</button></Link>
            </h1>
          </div>
          {/* <Featured /> */}
        </div>
      }

    </>
  )
}

export default Home;
