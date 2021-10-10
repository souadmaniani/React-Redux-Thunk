import React, {useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { SelectedProduct, RemoveSelectedProduct } from '../redux/actions/product-action';


const ProductDetails = () => {
	const product = useSelector(state => state.product)
	const {title, image, price, category, description} = product;
	const dispatch = useDispatch();
	const { productId } = useParams();
	useEffect(() => {
		const fetchProductDetails= () => {
			axios.get(`https://fakestoreapi.com/products/${productId}`)
			.then((product)=> dispatch(SelectedProduct(product.data)))
			.catch(err => console.log(err))
		}

		if (productId && productId !== "")
			fetchProductDetails();
		return (
			dispatch(RemoveSelectedProduct())
		)
	}, [productId, dispatch])

  return (
	<div className="ui grid container">
		{Object.keys(product).length === 0 ? (
		<div>...Loading</div>
		) : (
		<div className="ui placeholder segment">
			<div className="ui two column stackable center aligned grid">
			<div className="ui vertical divider">AND</div>
			<div className="middle aligned row">
				<div className="column lp">
					<img className="ui fluid image" src={image} alt="productImg"/>
				</div>
				<div className="column rp">
					<h1>{title}</h1>
				<h2>
					<a href="/" className="ui teal tag label">${price}</a>
				</h2>
				<h3 className="ui brown block header">{category}</h3>
				<p>{description}</p>
				<div className="ui vertical animated button" tabIndex="0">
					<div className="hidden content">
						<i className="shop icon"></i>
					</div>
					<div className="visible content">Add to Cart</div>
				</div>
				</div>
			</div>
			</div>
		</div>
		)}
  </div>
  );
};

export default ProductDetails;