import Productcomponent from './components/Productcomponent';

function App() {
  const products = [
    {
      id: 1,
      name: 'Burger',
      description: 'This is a delicious burger',
      stock: 20,
      price: 53,
      image: "https://th.bing.com/th/id/OIP.xsNkDZ2OSmgVRnqa1PchnQHaE7?w=257&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'This is a delicious pizza',
      stock: 20,
      price: 140,
      image: "https://th.bing.com/th/id/OIP.BDOVl95GkoK4DnXZCAjlGAHaHa?w=179&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
    },
    { 
      id: 3,
      name: 'Fries',
      description: 'This is a delicious fries',
      stock: 20,
      price: 53,
      image: "https://th.bing.com/th/id/OIP.R8vxJA01nLCYkI2qv0SUlwHaFN?w=221&h=180&c=7&r=0&o=7&pid=1.7&rm=3" 
    },
    {
      id: 4,
      name: 'Burger Steak',
      description: 'This is a delicious burger steak',
      stock: 20,
      price: 98,
      image: "https://th.bing.com/th/id/OIP.cEkf5Kpx7Roj9vlXtAdFYAHaE8?w=257&h=180&c=7&r=0&o=7&pid=1.7&rm=3"  
    } 
  ]; 

  return ( 
    <div className="App"> 
      {products.map((product) => ( 
        <Productcomponent key={product.id} product={product} /> 
      ))} 
    </div> 
  ); 
  
} 

export default App;