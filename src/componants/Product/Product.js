import './Product.css'
const Product = (props) => {
    console.log(props)
    const {id, name, img, price} = props.products;   
    return (
        <div  className='product'>
           <img src="" alt="" />
           <h5>Name: {name}</h5>
           <p>Pirce: {price} tk</p>           
        </div>
    );
};

export default Product;