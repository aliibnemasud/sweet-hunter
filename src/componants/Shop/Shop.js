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
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart)    
    }

    const clicktoRemove = 
    

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
                {
                    cart.map(product => <h3 key={product.id}>{product.name}</h3>)
                }
                <Sidebar></Sidebar>            
            </div>
        </div>
    );
};

export default Shop;