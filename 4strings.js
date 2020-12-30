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

slice(start,end)
substring(start,end)
substr(start,length)

var city = "Amsterdam"
city.slice(1)
"msterdam"
city.substring(1)
"msterdam"
city.substr(1)
"msterdam"

var city = "Amsterdam"
undefined
city.slice(2,5)
"ste"
city.substring(2,5)
"ste"
city.substr(2,5)
"sterd"


var city = "Amsterdam"
city.slice(-1)
"m"
var city = "Amsterdam"
city.slice(-2)
"am"
var city = "Amsterdam"
city.slice(2)
"sterdam"

var city = "Amsterdam"
city.substring(-1)
"Amsterdam"
var city = "Amsterdam"
city.substring(1)
"msterdam"
var city = "Amsterdam"
city.substring(-2)
"Amsterdam"

var city = "Amsterdam"
city.substring(-1,2)
"Am"
var city = "Amsterdam"
city.substring(-1,4)
"Amst"
var city = "Amsterdam"
city.substring(4,-1)
"Amst"
var city = "Amsterdam"
city.substring(-4,-1)
""
var city = "Amsterdam"
city.slice(-4,-1)
"rda"
var city = "Amsterdam"
city.slice(-2,-1)
"a"
var city = "Amsterdam"
city.slice(-1,-2)
""


var data = "i am learning javascript"
data.replace('javascript','JS')
"i am learning JS"

var data = "javascript i am learning javascript"

data.replace('javascript','JS')
"JS i am learning javascript"

data.replace(/javascript/g,'JS')


var name = "   Aakash . "
name.replace(/ /g,'')

name.replace(/ /g,'').toUpperCase()
"AAKASH."

var url = "https://github.com/Aakashdeveloper/jan_node_mrng"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "jan_node_mrng"]
url.split('/')[4]
"jan_node_mrng"
var a = url.split('/')
undefined
a[a.length-1]
"jan_node_mrng"
a
(5) ["https:", "", "github.com", "Aakashdeveloper", "jan_node_mrng"]
a.length
5

var a = "javascript"
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
a.toString()
"j,a,v,a,s,c,r,i,p,t"
var out  = a.toString()
undefined
out.replace(/,/g,'')
"javascript"
var a =954067097
undefined
a.split('')
a.toString().split('')
(9) ["9", "5", "4", "0", "6", "7", "0", "9", "7"]