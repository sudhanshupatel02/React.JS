import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response =[
    {
      ItemName: 'HareRam',
      ItemDate: '09',
      ItemMonth: 'May',
      Itemyear: '2000'
    },
    {
      ItemName: 'HareKrishan',
      ItemDate: '20',
      ItemMonth: 'June',
      Itemyear: '1998'
    },
    {
      ItemName: 'HareRam',
      ItemDate: '24',
      ItemMonth: 'Septembar',
      Itemyear: '1975'
    },
  ];
  return (
   <div>
    <Card>
        <Item name = {response[0].ItemName}>
          Hello Jee Mai Hu Aapka First item
        </Item>
        <ItemDate day = {response[0].ItemDate} month = {response[0].ItemMonth} year = {response[0].Itemyear}></ItemDate>

        <Item name = {response[1].ItemName}></Item>
        <ItemDate day = {response[1].ItemDate} month = {response[1].ItemMonth} year = {response[1].Itemyear}></ItemDate>

        <Item name = {response[2].ItemName}></Item>
        <ItemDate day = {response[2].ItemDate} month = {response[2].ItemMonth} year = {response[2].Itemyear}></ItemDate>
        <div className="App"> Hello world</div>
    </Card>
    
   </div>
   
  );
}

export default App;
