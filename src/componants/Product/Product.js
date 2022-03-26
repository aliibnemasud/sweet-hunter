import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
const Product = (props) => {
    //console.log(props)
    const {clickToAdd, products} = props;
    const {id, name, img, price} = products;  
    

    return (
        <div  className='product'>
           <div className="product-info">
           <img src={img} alt="" />
           <h5>Name: {name}</h5>
           <p>Pirce: {price} tk</p>
           </div>
           <button onClick={() => clickToAdd(products)} className='cart-btn'>
               <p className='btn-info'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p> 
            </button>           
        </div>
    );
};

export default Product;