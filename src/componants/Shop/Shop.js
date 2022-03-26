import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';
import './Shop.css';

const Shop = () => {

    const [products, setProduct] = useState([]);
    // const [cart, setCart] = useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    return (
        <div className='shop'>
            <div className="product-container">
            {
                products.map(product => <Product
                    products={product}
                    key={product.id}
                    // handelCart={handelCart}
                    
                    ></Product>)
            }
            
            </div>
            <div className="sidebar">
            <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Shop;