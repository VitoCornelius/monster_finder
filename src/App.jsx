import React, {Component} from 'react';

import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box";

import './App.css';

class App extends Component { // using the classes we have access to the state object

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }

        //this.handleChange = this.handleChange.bind(this); //a method on any function where the context of this is whatever we pass to it
    }

    // when this component puts our component on the page
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // this returns a promise
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

/*    handleChange(e) {
        this.setState({searchField: e.target.value}, () => console.log(this.state));
    }*/

    handleChange = (e) => {
        this.setState({searchField: e.target.value}, () => console.log(this.state));
    }; //this is automatic binding whent he new class is creates

    render() { // this is executed as soon as the state changes

        const {monsters, searchField} = this.state;  // ES6 object destructution
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App_css">
                <h1>Monster Rolodex</h1>
                <SearchBox placeholder={'search monsters'}
                           handleChange={this.handleChange}
                />
                <CardList sent_monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
