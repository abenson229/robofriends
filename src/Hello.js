import React, {Component} from "react";
import "./Hello.css";


class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello React World!!!!</h1>
                <p>React might end up being pretty cool</p>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;