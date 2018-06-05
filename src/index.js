import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

// import './view/db.js';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/app.css';

import Home from './view/Home';
import About from './view/About';
import Skills from './view/Skills';
import Info from './view/Info';
import Contact from './view/Contact';
import Inputs from './view/Inputs';

import burger from './assets/img/burger-fff.png';
import burger_close from './assets/img/burger-close.png';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "React"
        }
    }

    handleClick(){
        let img = document.getElementsByClassName('burger-img'), img1 = img[0].classList, img2 = img[1].classList;
        let menu = document.getElementsByClassName('navbar-collapse'), list = menu[0].classList;
            list.toggle('in');
            img1.toggle('close');
            img2.toggle('close');
    }

    render(){
        return(
            <Router>
                <div className="container-fluid main-content p0">
                    <nav id="my-navbar" className="navbar navbar-default  m0">
                        <div className="container-fluid p0">
                            <div className="navbar-header m0">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <img className="burger-img" src={burger} alt="burger-fff" id="burger" onClick={this.handleClick.bind(this)} />
                                    <img className="burger-img close" src={burger_close} alt="burger-close" id="burger" onClick={this.handleClick.bind(this)} />
                                </button>
                            </div>

                            <div className="collapse navbar-collapse p0" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <NavLink exact to="/" className="nav-link" activeStyle={{ color:'#39a8cb' }}>Home </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className="nav-link" activeStyle={{ color:'#39a8cb' }}>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/skills" className="nav-link" activeStyle={{ color:'#39a8cb' }}>Skills</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/info" className="nav-link" activeStyle={{ color:'#39a8cb' }}>Info</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className="nav-link" activeStyle={{ color:'#39a8cb' }}>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/inputs" className="nav-link" activeStyle={{ color:'#39a8cb' }}>Inputs</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/info" component={Info} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/inputs" component={Inputs} />
                </div>
            </Router>
        );
    }
}

ReactDom.render(<Index />, document.getElementById('app'));