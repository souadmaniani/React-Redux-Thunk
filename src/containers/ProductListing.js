import React, {useEffect} from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from 'react-redux';
import { FetchProducts } from '../redux/actions/product-action'

const ProductListing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch])

  return (
    <div className="ui grid container">
    	<ProductComponent />
    </div>
  );
};

export default ProductListing;