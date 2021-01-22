function human(name){
    this.name=name;
    this.country= "London"
}

function robot(name){
    this.name=name;
    this.legs=2
    this.age = 10
}

var john = new human('John')
john
human {name: "John", country: "London"}

human.prototype = new robot()
var alvin = new human('Alvin')
undefined
alvin
human {name: "Alvin", country: "London"}
alvin.legs
2
alvin.age
10
john.legs