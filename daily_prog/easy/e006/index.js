#!/usr/local/bin/node

var denominator = 1.0;
var numerator = 4.0;
var iteration = 0.0;
var result  = 0.0;

for (var i;i = 100000 ;i++){
	if ( iteration % 2 == 0 ){
		result += numerator/denominator;
	} else {
		result -= numerator/denominator;
	}

	// result = ((numerator/denominator));
	console.log('Numer: ' + numerator + ' Denom: ' + denominator );
	console.log(result);
	iteration++;
	denominator += 2;
}
