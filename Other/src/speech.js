import React, { Component } from 'react';
import txt from './txt';
import './speech.css'; 
let randoms = [];

export default class Speech extends Component {
  randomNumber(){
	return Math.floor(Math.random() * ( txt.length ));
  }
  sentancesInAParagraph(){
	return Math.floor(Math.random() * ( 3 ) ) + 1 ;
  }
  getRandomNumber(){
	var number;
  	do{	
	  number = this.randomNumber();
	} while( randoms.includes( number ) === true );
	randoms.push( number );
	return number;
  }
  paragraphText(){
	  return [...Array(this.sentancesInAParagraph() ).keys()].map( () => {
			return txt[this.getRandomNumber()]
	  })
	
  }
  render() {
	  let paragraphs = parseInt( this.props.paragraphs, 10 );
	  randoms = [];
	  console.log( this.randoms );
	  return ( 
	  	<div className="ipsum"  >
			{ [...Array(paragraphs).keys()].map( v => {
				return <p key={v}>
					{this.paragraphText()}
				</p>
			})}
		</div>
	  );
  }
}

