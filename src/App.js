import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const nayoks = ['Anwar', 'omar sani', 'Elias']; 
  const products = [
    {name: 'Photoshop', price: '$90.90'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier EI', price: '$249.99'},
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames); 
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {/* <ul>
          <li>{productNames[0]}</li>
          <li>{productNames[1]}</li>
          <li>{productNames[2]}</li>
        </ul> */}
        {/* <Person name={nayoks[0]} nayeeka="Moushumi"></Person>
        <Person name={nayoks[1]} nayeeka="Shabana"></Person>
        <Person name={nayoks[2]} nayeeka="Moushumi"></Person> */}
        
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <ul>
          {
            products.map(pd => <Product product={pd} ></Product>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="football-player"></Person>
        <Person name="Panna" job="Audience"></Person>
        <Person name="Channa" job="Audience"></Person>
        <Person name="Lanna" job="Audience"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10); 
  const handleIncrease = () => setCount(count + 1); 
  // const handleDecrease = () => setCount(count - 1); 
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onMouseOver={() => setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  ); 
}

function Users(){
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json() )
    .then(data => setUsers(data)); 
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name} - {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const {name, price} = props.product; 
  const productStyle={
    border: '1px solid gray',
    backgroundRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      {/* <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1> */}
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: "2px solid red", width: '400px', margin: '10px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of: {props.job}</h3>
    </div>
  )
}

export default App;
