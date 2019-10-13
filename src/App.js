import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField :''
    };
    // ver 1
    //this.handChange = this.handChange.bind(this);
  }

  //ver 1 ( thşs tanımlı olması için constructor için de bind fonksiyonu çağırılır)
  // handChange(e){
  //   this.setState({searchField: e.target.value});
  // }

  // ver 2 arroqw fonksiyonu kullanılırsa bind çağırmaya gerek yok.
  handChange = e => {
    this.setState({searchField: e.target.value});
  }
  // Servisten json çekme
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters : users}))
  }
  render() {

    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(      
    <div className="App">
      <h1>Monster Rolodex</h1>
       <SearchBox
       placeholder='search monsters'
       handChange = {
       this.handChange}
       />
      <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}


export default App;
