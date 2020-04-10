import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.componet';
import './App.css';
import {SearchBox} from './components/SearchBox/Searchbox.component';

class App extends Component {
  constructor(){
  super ();

  this.state = {
    monsters: [],
    searchField:''
  };

  //this.Handlechange = this.Handlechange.bind(this);
}

Handlechange = (e) => {
  this.setState({searchField: e.target.value})
}

  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
}

render(){

  const {monsters, searchField} = this.state;
  const MontricoFiltrados = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );


  return(
    <div className = 'App'>
    <h1>Montrico</h1>
    
      <SearchBox
      placeholder='Montrico'
      Handlechange= {this.Handlechange}
      />   
      <CardList monsters = {MontricoFiltrados}/>    
    </div>
  );
}

}



export default App;
