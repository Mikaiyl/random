#!/usr/local/bin/node
var fs = require('fs');

// fs.readFile('/Users/mikaiylenigma/Scripts/Daily Programmer/e269/input.txt','utf8',
fs.readFile( process.argv[2] ,'utf8',
	function(err,data){
		if(err){
			console.log('error code 3:');
			console.log('');
			return 0;
		}
		var buffer = new Object; var str  = '····'; buffer.length = 0; buffer.level = 0;	
		var parsed = data.replace(/·/g,'').replace(/»/g,'').trim().split('\n'); 
		buffer.length = parsed.shift();
		
		var arr = parsed.map(function(currentValue,index,array){
			var k = new String;
			if( (/IF/.test(array[index]) && !(/ENDIF/.test(array[index])) ) || /FOR/.test(array[index])) {
				currentValue = k.concat(str.repeat(buffer.level),array[index]);
				buffer.level++;
			} else if( /ENDIF/.test(array[index]) || /NEXT/.test(array[index])){
				buffer.level--;
				currentValue = k.concat(str.repeat(buffer.level),array[index]);
			} else {
				currentValue = k.concat(str.repeat(buffer.level),array[index]);
			}
			console.log(currentValue); 
			return currentValue;
		});

		if (buffer.level > 0){
			Console.log('error code: 1');
			console.log('missing block ending');
		} else if (buffer.level < 0){
			console.log('error code: 2');
			console.log('missing block beginning');
		} else {
			console.log(arr.join('\n'));
		}
	});
