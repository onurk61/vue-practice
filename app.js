/* Deneme 1  --- (LET) Variables declared inside a { } block cannot be accessed from outside the block */
let x = 10;

{
    let x = 11;
    console.log( "function y : " + x);
}

console.log(x);
 
/* Deneme 2 --- (VAR) Variables declared inside a { } block can be accessed from outside the block. */
var y = 10 ;

{
    var y = 11;
    console.log("function y : " + y);
}
console.log(y);


/* 
  CONST 

  When to use JavaScript const ? 

  -variables must be assigned a value when they are declared
  -always declare a variables with const unless you know that the value will change
  -Always use const when you declare: 
   * A new Array
   * A new Object
   * A new Function
   * A new RegExp
  -YOU CANNOT:
   *Reassign a const value, array, object
  -BUT YOU CAN:
   *Change a const array, object

*/



//YOU CAN CHANGE THE ELEMENTS OF A CONSTANT ARRAY
const arr = ["Saab","Volvo","BMW"];
console.log(arr);
arr[0] = 'Toyota';
console.log(arr);
//Add new element at the end of array
arr.push("Audi");
console.log(arr);
//Add new element as first element
arr.unshift("Mercedes");
console.log(arr);
//pop method removes the last element from an array
arr.pop();
console.log("popping " + arr);
let z = arr.pop();
console.log( "removed element " + z + " ---- " +  " array after removed last element : " + arr);
//Removes first element in an array
arr.shift();
console.log(arr);
// You cannot Reassign the array
const cars = ["A","B","C"];
/* cars = ["Toyota", "Mercedes","BMW"]; */ //you will get an error (check console)



//YOU CAN CHANGE THE PROPERTİES OF CONSTANT OBJECT
const onur = {type: "Fiat", model: "500", color:"white"};
console.log(onur);
//You can change a property
onur.color = "red";
console.log(onur);
//You can add a property
onur.owner = "Onur";
console.log(onur);
//BUT YOU CANNOT Reassign the OBJECT
const popular = {type: "Volvo",model:"200"};
/* popular = {type:"Onur", model:"250"}; */ // You will receive an error

/* 
    REAL LİFE OBJECTS, PROPERTİES, AND METHODS
    -All cars have the same properties (name,model,weight,color), but the property values (Fiat,1992,500,red) different from car to car
    -All cars have the same methods (start,drive,brake,stop), but the methods performed a different times.

*/


// Accesing Object Properties
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person.firstName);
console.log(person.age);
console.log(person['lastName']); //you do not have to use this way. it is not useful.


/* 
    Object Methods
    -Objects can also have methods.
    -Methods are actions that can be performed on objects.
    -Methods are stored properties as function definitions.

    const person1 = {
        firstName: "Onur",
        lastName: "Kanca",
        fullName: function () {
            return this.firstName + " " + lastName;
        }
    }

    -A method is a function stored as a property.

    // name = person1.fullName()
     - will return "Onur Kanca"
    -If you access a method without the () parentheses, it will return the function definition.
    // name = person.fullName;
    - will return "fullName: function () {return this.firstName + " " + lastName;}"

*/

const fruits = ["Banana","Apple","Cherry"];
console.log(fruits);
console.log(fruits.toString());



/* 
   ARRAY SPLİCE() METHOD

   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.splice(2,0,"Lemon","Kiwi");

   -The first parameter(2) defines the position where new elements should be added.
   -The second parameter(0) defines how many elements should be removed.
   -The rest of the parameters ("Lemon","Kiwi") define the new elements to be added.
   -The splice() method returns an array with the deleted items:

   new array will be ["Banana","Orange","Lemon","Kiwi","Apple","Mango"]

*/

/* 
    sort from A to Z ascending
    reverse from Z to A descending

*/

const points = [40, 100, 1, 5, 25, 10];
const kkk = points.sort(
    function (a,b){
        return b-a;
    }
);
console.log(kkk);


// Reduce returns only one result
const sayilar = [1,33,44,55,66,77,88,99,23,4,5,46,600];
let sayilarToplami = sayilar.reduce(toplam);
console.log('reduce sonucunda verilen değer : ' + sayilarToplami);

let asd = sayilar.reduce((val,top) => {
    return val + top;
})
console.log("asdasdasd : " + asd);

 
function toplam(value, topla){
    return topla + value;
}

//CONST ARRAY WİTH BLOCK SCOPE
const mmm = [1,2,3,4,5];

{
    const mmm = [5,4,3,2,1];
    console.log(mmm);
}

console.log(mmm);

/* 
    DİFFERENT KİNDS OF LOOPS
    *for - loops through a block of code a number of times
    *for/in - loops through the properties of an object
    *for/of - loops through the values of an iterable object
    *while - loops through a block of code while a specified condition is true
    *do/while - also loops through a block of code while a specified condition is true

*/

/* ------------------------------------------------------------------------------------ */

const fruitsArray = ["Armut","Kivi","Portakal","Karpuz","Elma","Kavun","Erik","Muz"];

function addItem(arr,newItem){
    const newFruitsArray = [...arr];
    newFruitsArray.push(newItem)
}

function removeItem(arr,newItem){
    const removedFruitsArray = [...arr];
    let indexArray = removedFruitsArray.indexOf(newItem);
    if(indexArray >= 0){
    return removedFruitsArray.splice(indexArray,1);
    }
}

addItem(fruitsArray, "Greyfurt");
removeItem(fruitsArray,"Portakal");


/* ------------------------------------------------------------------------------------ */

const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];

const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));

console.log(JSON.stringify(ratings));

console.log(ratings)

/* ------------------------------------------------------------------------------------ */

const listArr = [
    {
        name:'Onur',
        age: 29
    },
    {
        name: 'Omer',
        age: 23
    },
    {
        name: 'Osman',
        age: 28
    },
];

const newListArr = listArr.filter(item => item.age > 20);
console.log(JSON.stringify(newListArr));

/* ------------------------------------------------------------------------------------ */


const popularMovies = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
      },
      {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
      },
      {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
      },
      {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
      },
      {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
      }
];

const bestMovies = 
popularMovies.map(movie => {
    return {
        title: movie.Title,rating:movie.imdbRating
    };
}).filter(item => {
    return parseFloat(item.rating) >= 8.0;
});

console.log(JSON.stringify(bestMovies));

/* ------------------------------------------------------------------------------------ */

const ageArray = [
    {
        firstName: "Onur",
        lastName: "Kanca",
        age: 29
    },
    {
        firstName: "Ömer",
        lastName: "Şanver",
        age: 23
    },
    {
        firstName: "Osman",
        lastName: "Aydur",
        age: 28
    }
]

const sumOfAge = ageArray.reduce((sum,user) => sum += user.age, 0);
console.log(sumOfAge);

const usersObj = ageArray.reduce((obj,user) => {
    obj[user.firstName] = user.age;
    return obj;
},{});
console.log(usersObj);


/* ------------------------------------------------------------------------------------ */

// The global variable
  
  function getRating(watchList){
    var averageRating = watchList
    .filter(user => user.Director === "Christopher Nolan")
    .reduce((avg,movie) => {
      return avg += parseFloat(movie.imdbRating / watchList.filter(user => user.Director === "Christopher Nolan").length)
      },0);
    return averageRating;
  }
  console.log(getRating(watchList));

  /* ------------------------------------------------------------------------------------ */


  const arrayOfNumbers = [-3.5,89,123,44,-22,9.5,3.4,2.3,22.5,-99,-23,12];

  const squareOfPositiveNumbers = arrayOfNumbers.filter(num => num > 0 && num % parseInt(num)=== 0).map(number => number*number);
  console.log("squareOfPositiveNumbers : " + squareOfPositiveNumbers);


    /* ------------------------------------------------------------------------------------ */

    const globalArray = [5, 6, 3, 2, 9];
    const globalArr = ["A","B","D","Z","F","G","O"];

    function nonMutatingSort(arr){
        let arr1 = arr.concat();
        let arr2 = arr1.sort((a,b)=>{
            return a-b;
        })

        let arr3= arr1.sort((a,b)=>{
            return b-a;
        });
        return arr2;
        
    }

    console.log(nonMutatingSort(globalArray));

    nonMutatingSort(globalArray);

    /* ------------------------------------------------------------------------------------ */

    // RETURN URLSLUG
    function urlSlug(str){
        return str.trim().split(/\s+/).map(x => x.toLowerCase()).join('-');
    }
    urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone');
    urlSlug(' Winter Is  Coming');

    /* ------------------------------------------------------------------------------------ */

    const aaa = ["Onur","Kanca","Cansu"];

    let selectedArray = document.getElementById('countriesArray');

    let html = selectItems(aaa);
    selectedArray.innerHTML = html;

    function selectItems(arr){
        let a = `<option value="">Please Select</option>`;
        arr.forEach(item => {
            a += `<option value="${item.toLowerCase()}">${item}</option>`;
        });
        return a;
    }
     
