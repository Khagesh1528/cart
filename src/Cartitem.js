import React from "react";
import { render } from "react-dom";

class CartItem extends React.Component{
    render(){
        return(
        <div className="cart-item">
                <div className="left-block">
                <img style={Styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{ color:'#777' }}>Rs 999</div>
                    <div style={{ color:'#777' }}>QTY: 1</div>
                </div>
                <div className="cart-item-actions">

                </div>
        </div>
        );
    }
}

const Styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius:4,
        background:'#ccc'
 
    }
}

export default CartItem;