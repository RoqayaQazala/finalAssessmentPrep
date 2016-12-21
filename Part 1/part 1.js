//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
 

var frineds= [
			frined1 ={
			"name ":"hadeel";
			"age":24;
			"nationality":"syrian";
			"education" :"electrcity engineering"
			},
			frined2 ={
				"name ":"nour";
				"age":25;
				"nationality" :"jordenian";
				"education" :"computer engineering"
			}
]

 function represent(frineds){
 	return{
 myFriend :function(name, age, education, nationality){
		return "name" :name,
 			    "age": age,
 			    "education" :education,
 			   "nationality" :nationality
 },

 showFriend :function(){
"name :"+"Fatema" +","+"age :"26 +","+"education :"+"computer engineering"
 },
 avergeStudents :function(age){
 		var count =0
 		var total=0
 		for(key in obj){
		total+=age[key]
 		count++
 		}
 		return total/count
 }
 		}
 }
 	



/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function square(x){
	return x*x;
}



function range(start, end) {
    var total = [];

    if (!end) {
        end = start;
        start = 0;
    }

    for (var i = start; i < end; i += 1) {
        total.push(i);
    }

    return total;
}
function rangeSquared(arr){
	return filter(arr,function(ele,i){
		       var y=square(ele%2===0)
		return range(y),
	})

}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function getMax(num) {
  return Math.max.apply(null, num);
}
function leader(array){
	for (var i = 0; i < array.length; i++) {
			array[i]
	var acc =getMax(array.every(callback[thisArg]))
			 acc.push()
			
}
		return acc
	}