import React from 'react';

export default class ParagraphChooser extends React.Component {
  render() {
	  let handleChange = this.props.change;
	  return ( 
	  	<div>
	 	  <label htmlFor="pselect">Select the number of paragraphs</label>	
		  <select id="pselect" onChange={handleChange} defaultValue="5" >
			{ [...Array(10).keys()].map( v => {
				return <option key={1+v} value={1+v}>{1+v}</option>
			}) }
		  </select>
		</div>
	  );
  }
}

