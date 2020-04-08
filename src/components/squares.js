import React from 'react';
import '../styles/square.css';

function Square(props) {

    return (
        <div id="square" className="square" 
            style={{transform:
             `translateX(${props.translateX}px) 
             translateY(${props.translateY}px)`}}>
        </div>
    );

}

export default Square;