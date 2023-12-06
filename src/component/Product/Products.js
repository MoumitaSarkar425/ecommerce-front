import React, { Fragment, useEffect, useState } from 'react';
import "./Products.css";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors, getProduct} from '../../actions/productActions';
import ProductCard from '../Home/ProductCard';
import Loader from '../layout/Loader/Loader';
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const categories =[
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops"
];

 const Products = ({ match }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const {loading,error,products,productsCount,resultPerPage,filteredProductsCount} = useSelector(
    (state) => state.products 
  )

  const [currentPage, setcurrentPage] = useState(1);
  const [price, setPrice] = useState([0,25000]);
  const [category, setCategory] = useState("");
const keyword =  match.params.keyword;

const setCurrentPageNo =(e)=>{
  setcurrentPage(e);
}

const priceHandler =(e,newPrice)=>{
  setPrice(newPrice);
}

console.log(keyword)

  useEffect(()=>{
    dispatch(getProduct(keyword,currentPage,price,category));
  },[dispatch,keyword,currentPage,price,category]);

  let count = filteredProductsCount;
  return (
    <Fragment>
        {loading ? (<Loader/>):(
            <Fragment>
                <h2 className='productsHeading'>Products</h2>
                <div className='products'>
                    {products && 
                    products.map((product)=>
                        <ProductCard key={product._id} product={product} /> 
                    )}
                </div>

                <div className='filterBox'>
                      <Typography>Price</Typography>
                      <Slider
                      value={price}
                      onChange={priceHandler}
                      valueLabelDisplay="auto"
                      aria-labelledby='range-slider'
                      min={0}
                      max={25000}
                      />
                      <Typography>Category</Typography>
                      <ul className='categoryBox'>
                      {categories.map((category) => (
                        <li
                          className="category-link"
                          key={category}
                          onClick={() => setCategory(category)}
                        >
                          {category}
                        </li>
                      ))}
                      </ul>
                </div>
                { resultPerPage < count &&
                  (<div className='paginationBox'>
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    prevPageText="Prev"
                    nextPageText="Next"
                    firstPageText="First"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                  </div>)}
            </Fragment>
        )}
    </Fragment>
  )
}
export default Products;