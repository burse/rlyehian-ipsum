import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

import ParagraphChooser from './paragraph-chooser';
import Lorem from './lorem';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
	super();
	this.state = {
		paragraphs: 4
	}
  }
  onParagraphSelect = e => {
	this.setState( { paragraphs : e.target.value } );
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
      <Navbar >
      <Navbar.Header>
    <Navbar.Brand>
    <img src={logo} className="App-logo" alt="logo" />
    </Navbar.Brand>
    <Navbar.Brand>
    <a href="#">R'lyehian Ipsum</a>
    </Navbar.Brand>

</Navbar.Header>

<Navbar.Collapse>
<Nav pullRight>
  <NavItem>A Lovecraftian Placeholder-Text Generator</NavItem>
</Nav>
</Navbar.Collapse>

      </Navbar>
		  <ParagraphChooser change={this.onParagraphSelect} />
        </div>
		<Lorem paragraphs={this.state.paragraphs} />
      </div>
    );
  }
}

export default App;
