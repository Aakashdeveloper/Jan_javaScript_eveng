var moviename = "Avengers";
var movieRating = 4.5;
var movielang = "Eng";

var moviename1 = "Jab We Met";
var movieRating1 = 4.8;
var movielang1 = "Hindi";

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}

movies
{name: "Avengers", rating: 4.5, lang: "Eng"}
typeof(movies)
"object"
movies.name
"Avengers"
movies.lang
"Eng"
movies.rating
4.5
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.5, lang: "Eng", ind: "Hollywood"}
movies.rating=4.7
4.7
movies
{name: "Avengers", rating: 4.7, lang: "Eng", ind: "Hollywood"}
delete movies.lang
true
movies
{name: "Avengers", rating: 4.7, ind: "Hollywood"}


var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}
undefined
movies['name']
"Avengers"

JSON
JavaScript Object Notation  

var movies = [
    {
        "name":"Avengers",
        "rating":4.5,
        "lang":"Eng"
    },
    {
        "name":"Jab We Met",
        "rating":4.5,
        "lang":"Hindi"
    }
    ,
    {
        "name":"Mad Max",
        "rating":4.8,
        "lang":"Eng"
    }
]

movies[1].name
"Jab We Met"

var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}

for(key in movie){
    console.log(key)
}
name
rating
lang 

for(key in movie){
    console.log(movie[key])
}
'Avengers'
4.5
'Eng'

/////////////////////
var calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}

calc.sum(10,20)
30
calc.sub(10,20)
-10

var dbQuery = {
    find:(table) => { return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} name,city values(${data.name}, ${data.city})`}
}

dbQuery.find('Student')
"Select * from Student"
dbQuery.insert('Student',{'name':'Nikita','city':'Amsterdam'})
"Insert into Student name,city values(Nikita, Amsterdam)"