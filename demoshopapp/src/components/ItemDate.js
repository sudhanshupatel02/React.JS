import './ItemDate.css';

function ItemDate(){
    const day = 20;
    const month = ' june ';
    const year = 2000;

   return (<div className='date'>
       <span> {day} </span>
       <span> {month} </span>
       <span> {year} </span>
   </div>);

}

export default ItemDate;
