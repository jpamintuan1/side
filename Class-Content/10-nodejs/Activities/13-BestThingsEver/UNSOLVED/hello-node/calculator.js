// var hello = parseFloat(process.argv[2])
// var hi = 	parseFloat(process.argv[3])
// console.log(hello - hi);


//1. get the word from command line
var operator =  process.argv[2]
// 2 .. if subtract etc etc
if ( operator === 'add' ){

console.log(parseFloat(process.argv[3])	+ parseFloat(process.argv[4]));
}
else if(operator === 'subtract'){
console.log(parseFloat(process.argv[3])	- parseFloat(process.argv[4]));
	}
else if(operator === 'divide'){
console.log(parseFloat(process.argv[3])	/ parseFloat(process.argv[4]));
	}