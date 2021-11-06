// delete last element
let myFavouriteFruits = ["Mango", "Orange", "Banana"]
myFavouriteFruits.pop()
console.log(myFavouriteFruits);

//begging add element
let myFavouriteGames = ["Chess", "Ludo", "Badminton"]
myFavouriteGames.unshift("Basketball")
console.log(myFavouriteGames);

//delete perticular element
let myFavourite_Games = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"]
let removedItems = myFavourite_Games.splice(3,1)
console.log(myFavourite_Games);