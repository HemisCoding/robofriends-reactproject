import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './App.css';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
        robots: [],
        searchfield: ''
       } 
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
}

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
    };
};

export default App;

//App-Parent and the Childs are Searchbox and CardList
//Anytime the searchBox changes - onChange, I'm going to run the function
//callin the function searchChange (Everytime the on change event is triggerred- call the searchchange function - which is a prop)