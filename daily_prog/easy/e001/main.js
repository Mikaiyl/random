const readline = require('readline');

var response = [];
const rl = readline.createInterface({
 	input: process.stdin,
	output: process.stdout
});

rl.setPrompt('What is your name? ');
rl.prompt();

rl.on('line',(ans)=>{
	response.push(ans);
	if ( response.length == 1 ){
		rl.setPrompt('How old are you? ');
		rl.prompt();
	} else if ( response.length == 2 ){
		rl.setPrompt('What is you username? ');
		rl.prompt();
	} else if ( response.length == 3 ){
		console.log( 'Your name is ' + response[0] + ', you are ' + response[1] + ' years old, and you username is ' + response[2] + '.' );
		process.exit(0);
	}
});

