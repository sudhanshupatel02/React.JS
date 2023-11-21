import './Item.css'

function Item(props){
   const itemName = props.name;
   return(<p className ='btn' >{itemName}</p>);
}

export default Item;