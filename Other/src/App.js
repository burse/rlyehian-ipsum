import React, { Component } from 'react';
import ParagraphChooser from './paragraphChooser';
import Speech from './speech';
import './App.css';


class App extends Component {
  constructor(){
	super();
	this.state = {
		paragraphs: 5
	}
  }
  onParagraphSelect = e => {
	this.setState( { paragraphs : e.target.value } );
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
		  <h1>Melania Ipsum</h1>
          <h2>Generate a Melania Trump Speech</h2>
		  <ParagraphChooser change={this.onParagraphSelect} />
		  <p>Made With &#9825; by <a href="http://aaron.jorb.in">Aaron Jorbin</a> </p>
        </div>
		<Speech paragraphs={this.state.paragraphs} />
      </div>
    );
  }
}

export default App;
