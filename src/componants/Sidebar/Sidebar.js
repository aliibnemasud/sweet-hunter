import React from 'react';

const Sidebar = (props) => {
    console.log(props)
    const {resetCart, bestMatch} = props;

    return (
        <div>            
            <button onClick={bestMatch}>Select The lucky One</button> <br/>
            <button onClick={() => resetCart()}>Reset Cart</button>

        </div>
    );
};

export default Sidebar;