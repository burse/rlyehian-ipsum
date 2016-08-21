var Promise = require( 'bluebird' ),
	fsp = require( 'fs-promise' );

fsp.readdir( './txt-src' ).then( function( files ){
	var filePromises = [];
	files.forEach( f =>{
		filePromises.push( fsp.readFile( './txt-src/' + f, 'utf8' ) );
	});
	Promise.all( filePromises ).then( writeResults );
});

function writeResults( files ){
	var allLines = [];
	var content = 'var txt=';
	files.forEach( f => {
		var lines = f.split(/\r?\n/);
		lines.forEach( l => {
			if( l.trim() !== ''){
				allLines.push( l );
			}
		});
	});
	content = content.concat( JSON.stringify( allLines ) );
	content = content.concat( ";\n\n export default txt;" );
	fsp.writeFile('./src/txt.js', content, 'utf8').then( a => {
		console.log( 'All Done' );
	});
}
