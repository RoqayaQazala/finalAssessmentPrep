//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....

	function club(name){
		var ss={}
		ss.players=players;
		ss.add=add;
		ss.increase=increase;
		ss.check=check;
		ss.decrease=decrease;
		ss.sortPalyerBy=sortPalyerBy;
		return ss;
	};
	var players =function(names){
		acc=[]
		return acc.push(names);
	};
	var add =function(age, position, level, availability){
		return "age :"age,
				"position :" position,
				"level :" level,
				"availability :"availability

	};
	var increase =function(arrayOfPlayers,init level){
		var arr=[]
		var level=init level;
		each(arrayOfPlayers,function(ele,i){
			arr=(ele.length-1)
			level++;
		})
		return arr.push()
	};
}
	var check =function(player){
		var arr=Array.from(arg)
		if (arg.length ===0){
			return "the player is not available";
		}
			else {
				return "the player is available";
			}
		}
	};
var decrease= function(arrayOfPlayers,init level){
		var arr=[]
		var level=init level;
		each(arrayOfPlayers,function(ele,i){
			arr=(ele.length-1)
			level--;
		})
		return arr.push()
};
 var item= "age":players age ||"name":players name ||"position":players position
	 || "level":players level|| "availability":players availability ;
var sortPalyerBy= function(arrayOfPlayers,item){
		 for (var i = 0; i < arrayOfPlayers .length; i++) {
			 arrayOfPlayers[i].item.yourArray.sort(function(a, b) {
			return 	item.(a,b)
		
}
   
      
    };

