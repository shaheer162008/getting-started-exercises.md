// upper case
let NameOfPerson2:string = "shaheer";
function sentenceCase1(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}
 
console.log(sentenceCase1(NameOfPerson2));
// lower case
function func() {
	let str = 'SHAHEER';
	let string = str.toLowerCase();
	console.log(string);
}
func();
// title case
let intro:string ="my name is muhammmad shaheer"; 

function sentenceCase2(str) {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();

	return str.replace(/\w\S*/g,
		function (txt) {
			return txt.charAt(0).toUpperCase() +
				txt.substr(1).toLowerCase();
		});
}

console.log(sentenceCase2(intro));

