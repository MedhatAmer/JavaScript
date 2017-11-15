
//-1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);

//-2

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//add one

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

// adding second one

favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
console.log(favoriteAnimals.length);
console.log("array's length is: " + favoriteAnimals.length); 

// delete giraffe

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

// indexof

favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));

