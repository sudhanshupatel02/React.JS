import React from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

   function clickHandler(){
    console.log('button clicked');
   }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{props.title}</h2>
      </div>
      <button onClick={clickHandler}>Add to card</button>
    </Card>
  );
}

 export default ProductItem;