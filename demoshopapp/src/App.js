import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
   <div>
     <Item name = 'HareRam'></Item>
    <ItemDate day = '09' month = ' May ' year = '2000'></ItemDate>

     <Item name = 'HareKrishan'></Item>
    <ItemDate day = '20' month = ' june ' year = '2005'></ItemDate>

     <Item name = 'RamRam'></Item>
    <ItemDate day = '23' month = ' Septembar ' year = '2020'></ItemDate>
    <div className="App"> Hello world</div>
   </div>
   
  );
}

export default App;
