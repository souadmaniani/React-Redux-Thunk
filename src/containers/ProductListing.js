import React, {useEffect} from "react";
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SetProducts } from '../redux/actions/product-action'

const ProductListing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = ()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((response)=> dispatch(SetProducts(response.data)))
      .catch(err=> console.log(err))
    }
    
    fetchProducts();
  }, [dispatch])

  return (
    <div className="ui grid container">
    	<ProductComponent />
    </div>
  );
};

export default ProductListing;