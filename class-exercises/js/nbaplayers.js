//declare one string array
//return the second element from array
//return the last element
//add element at the end of the array
//return the number of elements
//add element on position/index 2 and shift other elements
//add element on position/index 1 and the element that is on that position shift to the end of the list:
//Ex: let fruits = ["apple", "banana", "lemon"];
//add "kiwi" -> ["apple", "kiwi", "lemon", "banana"]

let players = ["Tatum", "Brown", "Smart", "Brogdon", "Williams"]; // string array

console.log(players[1]);                                         //return the second element

console.log(players[players.length - 1]);                        //return the last element 

players.push("Horford");                                         //add element at the end of the array   

console.log(players.length);                                     // return number of elements

players.splice(2, 0, "Muscala");                                 //replace index 2 and shift other elements

let reservedPlayer = players[1];

players.splice(1, 1, "White");                                   //replace element index 1 and the element at index 1 shifts to the end of the list

players.push(reservedPlayer);

console.log(players);                                            //return array strings