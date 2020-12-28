var city = "london";
city.toUpperCase()

var city = "london";
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city.length    
6
city[0]
"l"
city[1]
"o"

var name = "   Aakash  "
name.length
11
name.trim()
"Aakash"

var name = "   Aakash . "
undefined
name.trim()
"Aakash ."

///case sensitive
var a = "John"
var b = "john"
undefined
a==b
false
a===b
false

a.toLowerCase() == b.toLowerCase()


var city = "Amsterdam"
undefined
city.charAt(0)
"A"

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"


var city = "aMSterDaM"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"MSterDaM"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2,5)
"ste"

Github