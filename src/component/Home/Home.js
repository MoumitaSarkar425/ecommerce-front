import React, { Fragment, useEffect } from 'react'
import { CgMouse } from "react-icons/cg";
import MetaData from '../layout/MetaData';
import './Home.css';
import Product from './ProductCard';
import {clearErrors, getProduct} from '../../actions/productActions';
import {useSelector,useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

//if redux not use then this product array is used
// const product = {
//    name:"Blue Tshirt",
//    price: "$3000",
//    _id: "1234",
//    images:[{url: "https://i.ibb.co/DRST11n/1.webp"}],
// };


const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {loading,error,products,productCounts} = useSelector(
    (state) => state.products 
  )

  useEffect(()=>{
    if(error){
      return alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  },[dispatch,error]);

  return(
  <Fragment>
    { loading ? ( <Loader/> ):(
      <Fragment>
      <MetaData title="Home Page" />
      <div className='banner'>
          <p>Welcome to Ecommerce </p>
          <h1>Find Amazing Product Below</h1>
          <a href='#container'>
              <button>Scroll <CgMouse/></button>
          </a>
      </div>
      <h2 className='homeHeading'>Featured Product</h2>
      <div className='container' id="container">
        {products && products.map((product)=> <Product product={product} /> )}
        
      </div>
    </Fragment>
    )}
  </Fragment>
  )
}

export default Home;

