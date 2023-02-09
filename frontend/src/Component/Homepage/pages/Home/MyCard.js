import React from 'react';

import './MyCard.css';

const Mycard = (props) => {
    return (
        <div className='mycard'>Mycard No. {props.cardno}</div>
    )
}

export default Mycard;