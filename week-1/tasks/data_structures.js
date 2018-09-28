// Release 0: Массивы. Есть 2 массива: arrayOfNames - с именами, arrayOfColors - с цветами.
// Надо получить объект coloredNames следующего вида: {<имя-1>: <цвет-1>, <имя-2>: <цвет-2>, <имя-3>: <цвет-3>}
// Использовать цикл.

const arrayOfNames=["Bill","Anna","Peter"];
const arrayOfColors=["Red","Blue","Pink"];
let coloredNames={} 


//Release 2: Build Many Objects Using a Constructor

function Car(name,color,convertable,good_weather) {
	this.name=name;
	this.color=color;
	this.convertable=convertable;
	this.good_weather=good_weather;
	
	this.sunRoofStatus = function() {
		if ((this.convertable) && (this.good_weather)) {
			console.log("the sunroof is open"); 
		}
		else if ((this.convertable)&&(!this.good_weather)) {
			console.log("the weather isn't so good");
		}
		else if ((!this.convertable) && (this.good_weather)) {
			console.log("we don't have a sunroof");
		} else {
			console.log("smth went wrong");
		}
		return;
	}

};

//Driver code
console.log(horsesDate);

// let's call a new car

var ford= new Car("mustang","red",true,false);

console.log("our function:");
console.log("");
console.log(ford);
console.log("our function in function:");
console.log("");
console.log(ford.sunRoofStatus());