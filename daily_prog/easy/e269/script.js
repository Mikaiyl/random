#!/usr/local/bin/node
var fs = require('fs');

if(process.argv[2] == null){
	console.log('Please add file to parse');
	return 0;
}

fs.readFile( process.argv[2] ,'utf8',
	function(err,data){
		
		if(err){
			console.log('*error code 100:');
			console.log('*no data');
			return 0;
		}
		
		var buffer = new Object; var txt  = '····'; buffer.length = 0; buffer.level = 0;	
		var parsed = data.replace(/·/g,'').replace(/»/g,'').trim().split('\n'); 
		buffer.length = parsed.shift();
		
		var checkSyntax = { ifNum: 0, endifNum: 0, forNum: 0, nextNum: 0}
		var arr = parsed.map(function(currentValue,index,array){
			
			var str = new String;
			
			if (/IF/.test(array[index]) && !(/ENDIF/.test(array[index]))) {
				currentValue = str.concat(txt.repeat(buffer.level),array[index]);
				buffer.level++;
				checkSyntax.ifNum++;
			} else if (/FOR/.test(array[index])) {
				currentValue = str.concat(txt.repeat(buffer.level),array[index]);
				buffer.level++;
				checkSyntax.forNum++;
			} else if (/ENDIF/.test(array[index])) {
				buffer.level--;
				if (buffer.level < 0){
					console.log('*error, index cannot be less than 0.');
				} else {
					currentValue = str.concat(txt.repeat(buffer.level),array[index]);
				}
				checkSyntax.endifNum++;
			} else if (/NEXT/.test(array[index])) {
				buffer.level--;
				if (buffer.level < 0){
					console.log('*error, index cannot be less than 0');
				} else {
					currentValue = str.concat(txt.repeat(buffer.level),array[index]);
				}
				checkSyntax.nextNum++;
			} else{
				currentValue = str.concat(txt.repeat(buffer.level),array[index]);
			}
			return currentValue;
		});

		if (checkSyntax.ifNum > checkSyntax.endifNum){
			console.log('*error code: 101');
			console.log('*missing ENDIF');
		} else if (checkSyntax.ifNum < checkSyntax.endifNum){
			console.log('*error code: 102');
			console.log('*missing IF');
		} 
		if (checkSyntax.nextNum > checkSyntax.forNum){
			console.log('*error code: 103');
			console.log('*missing FOR');
		} else if (checkSyntax.nextNum < checkSyntax.forNum){
			console.log('*error code: 104');
			console.log('*missing NEXT');
		}
		
		console.log(arr.join('\n'));	
	});
