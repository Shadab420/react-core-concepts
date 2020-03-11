import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  const style = { 
    color: 'red',
    fontSize: '20px',
    background: '#333'
  }

  const person = {
    name: "Shadab",
    age: "25"
  }

  const products = [
    {
      name: 'Photoshop',
      price: '$90.99'
    },

    {
      name: 'Illustrator',
      price: '$60.99'
    },

    {
      name: 'PDF Reader',
      price: '$6.99'
    }

  ]

  return (
    <div className="App">
      <p style={style}>Name => { person.name }</p>
      <p>Age => { person.age }</p>
      
      <Person name="Shakib Al Hasan" id={1}></Person>
      <Person name="Tamim Iqbal" id="20"></Person>

      {
        products.map((product, index) => {
          return <Product product={product} key={index}></Product>
        })
      }

      <Counter></Counter>
      <Users></Users>
      
      
    </div>
  );
}

function Person(props){
 
  const style ={
    border: '1px solid blue'
  }

  const { name, id } = props;

  return (
    <div style = {style}>
      <h1>{ name }</h1>
      <h3>{ id }</h3>
    </div>
    
  )
}

function Product(props){

  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h2>Name: {name}</h2>
  <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

const Counter = () =>{
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick = { () => setCount(count + 1) }>Increase</button>
      <button onClick = { () => count > 0? setCount(count - 1) : 0 }>Decrease</button>
    </div>
  )
}

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map( user => {
            return <li>{user.name}</li>
            })
          }
        </ul>
    </div>
  )
}

export default App;
