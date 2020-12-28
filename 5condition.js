= assignment
== compare the data
=== compare data and datatype

var a = 10
var b = '10';
a==b
true
 a===b
false

10<5
false
10>5
true
10<=5
false
10>=5
true

10 !== 5
true

10 !== '10'
true

10 != '10'
false


////Negation

var a = true

var a = true
!a 
false

var b = false
!b
true

var a = 0
!a
var a = 0
undefined
!a
true
var b = 1
undefined
!b 
false

var a = -1
undefined
!a
false

truthy => any number expect 0 is true weather -ve or +ve / string/ true
falsy  => null,undefined,0,false

var a = "hi"
undefined
!a
false
var a = null
undefined
!a
true