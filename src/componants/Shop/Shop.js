import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';
import './Shop.css';

const Shop = () => {

    const [products, setProduct] = useState([]);
    // cart
   const [cart, setCart] = useState([])
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    const clickToAdd = (product) => { 
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);    
    }
    

    return (
        <div className='shop'>
            <div className="product-container">
            {
                products.map(product => <Product
                    products={product}
                    key={product.id}
                    clickToAdd={clickToAdd}
                                        
                    ></Product>)
            }
            
            </div>
            <div className="sidebar">
            <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Shop;