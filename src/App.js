import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg  bg-light">
                        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand"> Todo App</Link>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/create" className="nav-link">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/edit/:id" className="nav-link">Edit</Link>
                                </li>
                                {/*<li className="navbar-item">*/}
                                    {/*<Link to="/" className="nav-link">Create</Link>*/}
                                {/*</li>*/}
                            </ul>


                        </div>

                    </nav>
                    <h2> HOT-DOGS </h2>
                    <Route path="/" exact component={TodosList}/>
                    <Route path="/edit/:id" component={EditTodo}/>
                    <Route path="/create" component={CreateTodo}/>
                </div>

            </Router>
        );
    }
}

export default App;
