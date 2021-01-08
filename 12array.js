Array is a collection of homogenious or hetrogenious data 
var a = [1,4,2,5,88,67] (array of numbers)
var b = ['ege','rgerger','degerrerb'] (array of string)
var c = [true,false,false,true](array of Boolean)

var d = [43,34346,'436456','hberhb',true,false,3534,"fb"]


var city = ["London","Paris","NewYork","Delhi"]
undefined
typeof(city)
"object"

city.length
4
city[0]
"London"
city[city.length-1]
"Delhi"

typeof(city[0])
"string"

var city = ["London","Paris","NewYork","Delhi"]
undefined
city.push('Venice')
5
city
(5) ["London", "Paris", "NewYork", "Delhi", "Venice"]
city.push('Amsterdam')
6
city
(6) ["London", "Paris", "NewYork", "Delhi", "Venice", "Amsterdam"]
city+"Mumbai"
"London,Paris,NewYork,Delhi,Venice,AmsterdamMumbai"

var city = ["London","Paris","NewYork","Delhi"]
city.push('Amsterdam','Venice')
6
city
(6) ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
var city = ["London","Paris","NewYork","Delhi"]
undefined
city.pop()
"Delhi"
city
(3) ["London", "Paris", "NewYork"]


var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
city.pop(2)
"Venice"
city.pop(436346454)
"Amsterdam"
city
(4) ["London", "Paris", "NewYork", "Delhi"]

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
undefined
city.shift()
"London"
city.unshift('Nice')
6
city
(6) ["Nice", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]

push > add in the end of array
unshift > add in the begining of array
pop > remove the last value of array
shift > remove the first value of array 


var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
undefined
city.slice(2,5)
(3) ["NewYork", "Delhi", "Amsterdam"]
city
(6) ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
undefined
city.splice(2,3)
(3) ["NewYork", "Delhi", "Amsterdam"] 
city
(3) ["London", "Paris", "Venice"]
city.splice(2,0,'Nice','Hongkong')
[]
city
(5) ["London", "Paris", "Nice", "Hongkong", "Venice"]
city.splice(3,1,'Pune','Mumbai')
["Hongkong"]
city
(6) ["London", "Paris", "Nice", "Pune", "Mumbai", "Venice"]

city.splice(index,deletecount,values)

var a =['a','b','c'];
var b= [1,2,3]

var a =['a','b','c'];
var b= [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]
undefined
a.concat(city,b)
(12) ["a", "b", "c", "London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", 1, 2, 3]


var myarr = ["London","Paris",[1,2,['audi','Bmw'],3],"Delhi","Venice"]
undefined
myarr
(5) ["London", "Paris", Array(4), "Delhi", "Venice"]
myarr[2]
(4) [1, 2, Array(2), 3]0: 11: 22: (2) ["audi", "Bmw"]3: 3length: 4__proto__: Array(0)
myarr[2][3]
3
myarr[2][2]
(2) ["audi", "Bmw"]
myarr[2][2][0]
"audi"

var myarr = ["London","Paris",[1,2,['audi','Bmw'],3],"Delhi","Venice"]
undefined
myarr.flat()
(8) ["London", "Paris", 1, 2, Array(2), 3, "Delhi", "Venice"]
myarr.flat(2)
(9) ["London", "Paris", 1, 2, "audi", "Bmw", 3, "Delhi", "Venice"]
var myarr = ["London", "Paris", 1, 2, "audi", "Bmw", 3, "Delhi", "Venice"]
undefined
myarr.sort()
(9) [1, 2, 3, "Bmw", "Delhi", "London", "Paris", "Venice", "audi"]
myarr.reverse()
(9) ["audi", "Venice", "Paris", "London", "Delhi", "Bmw", 3, 2, 1]
var myarr = ["London", "Paris", 1, 2, "audi", "Bmw", 3, "Delhi", "Venice"]
undefined
myarr.indexOf('Delhi')
7
myarr.indexOf('London')
0
myarr.indexOf('Mumbai')
-1
myarr.indexOf('Pune')
-1

var myarr = ["London", "Paris", 1, 2, "audi", "Bmw", 3, "Delhi", "Venice"]

Array.isArray(myarr)
true

var a = 10
Array.isArray(a)
false