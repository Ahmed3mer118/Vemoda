import React from 'react'

import BestSeller from './BestSeller';
import "./App.css"
import AboutShow from './AboutShow';
import Products from '../Context/Products';
import { Link } from 'react-router-dom';
import ProductMen from '../Context/ProductMen';
import ProductWomen from '../Context/ProductWomen';
import Footer from './Footer';


function HomePage() {
  return (
    <>
    <div className="home-image  mt-2 m-auto">
      <div className="content">
        <h1>The Best Brand  </h1>
        <p>Best Clothes for  Men's , Women , Kids</p>
        <Link to="/products">
        <button className='btn btn-light'>Show All Products</button>
        </Link>
      </div>
    </div>
    <BestSeller />
    <AboutShow />
    {/* <Products /> */}
    <ProductMen />
    <ProductWomen />
    <Footer />

    </>
  )
}

export default HomePage