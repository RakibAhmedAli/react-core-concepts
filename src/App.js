import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$50.99'},
    {name: 'UI Designer', price: '$60.99'},
    {name: 'PDF Reader', price: '$9.99'}
];

const schollers = [
  'Noman Ali Khan', 
  'Mohammad Hoblos', 
  'Dr. Zakir Naik', 
  'Ahmed Deedat', 
  'Asif Adnan'
];



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>

        <div>

            <Product name={products[0].name} price={products[0].price}>
            </Product>
            <Product name={products[1].name} price={products[1].price}>
            </Product>
            <Product name={products[2].name} price={products[2].price}>
            </Product>

          {
            products.map(pd => <Product product = {pd}></Product>)
          }

         </div>

          <Users></Users>

        <div>
          <Person name="Sakib Al Hasan"></Person>
          <Person name= 'Mushfiqur Rahman'></Person>
        </div>

        <ul>
          {
            schollers.map(schollers => <li>{schollers}</li>)
          }
          

          {/* <li>{schollers[0]}</li>
          <li>{schollers[1]}</li>
          <li>{schollers[2]}</li>
          <li>{schollers[3]}</li> */}
        </ul>
        <td>
            {
              products.map(product => <li>Product Name: {product.name}, price: {product.price}</li>)
            }
        </td>

        {/* <Todos></Todos> */}
        
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '280px',
    width: '250px',
    float: 'left',
    color: 'black',
    marginRight: '20px',
    marginBottom: '10px',
    marginTop: '20px'
  }
  return (
    <div style={productStyle}>

        <h2>{props.name}</h2>
        <h1>{props.price}</h1>
        <button 
          style={{borderRadius: '5px', padding: '5px', fontWeight: 'bold', float: 'right', margin:'20px', cursor: 'pointer'}}>
            Buy Now
        </button>

    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li style={{borderBottom:'2px solid yellow', padding:'1px', margin:'2px'}}>Name: {user.name} <br/> Email: {user.email}</li>)
        }
      </ul>
    </div>
  )
};

/*
function Todos(){
  const [todos, setTodos] = useState([]);

  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/todos')
    .then (res => res.json())
    .then (data => setTodos(data));
  }, [])
  return (
    <div>
      <h3>
        <ul>
          {
            todos.map(todos => <li>{todos.id} <br/> {todos.title} <br/> {todos.completed}</li>)
          }
        </ul>
      </h3>
    </div>
  )
};
*/

function Person(props){
  const personStyle={
    border: '2px solid yellow',
    margin: '8px',
    width: '400px',
    padding: '10px',
    float: 'left',
    backgroundColor: 'gray'
  }
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h3>Hero of the year</h3>
    </div>
  )
};

export default App;
