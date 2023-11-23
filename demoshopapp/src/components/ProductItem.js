import React, {useState} from 'react'; //!{useState} = React Hooks

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  const [title, setTitle] = useState(props.title);

   function clickHandler(){
    // title = 'Papcon'; onclick karne se tital nhi change ho to ham yaha use karte hai [state] ko 
    setTitle('  Popcons'); // yah shi hai
    console.log('button clicked');
   }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to card</button>
    </Card>
  );
}

 export default ProductItem;