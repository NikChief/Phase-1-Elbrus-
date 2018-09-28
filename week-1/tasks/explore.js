//Release 4: Write a JavaScript Program

//function to reverse the 
function reverse(word) {
	var ar = [];
	ar = word.split('');
	var new_ar = [];

	for (var i = ar.length; i > 0; i--) {
		new_ar.push(ar[i-1]);
	}
	 word=new_ar.join().replace(/,/g ,""); // g -global replacement
	 return word;
}

// ==== Driver code 
var word="hello";
var store_arr=[];

while (word == ("hello")) {  //Add driver code that prints the variable if some condition is true.
	console.log(reverse(word)); 
	store_arr.push(reverse("cat")); // stores the result of the function in a variable.
	store_arr.push(reverse("dog"));
	store_arr.push(reverse("zebra"));
	console.log(store_arr);
	word += "k"; 
}
