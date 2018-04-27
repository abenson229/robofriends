import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import {robots} from "./robots";

class App extends Component {  // need class vs function to manage state
    constructor() {
        super();

        this.state = {
            robots: robots,
            searchField: ""
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
};

// const App = () => {
//     return (
//         <div className="tc">
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     );
// };

export default App;