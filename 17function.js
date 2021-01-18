function
method
arrow function
IFFI
Generator
/////////////
var a = 10
var b = 20
a+b
30

///////
function
//////
function  add(a,b) {
    return a+b
}
undefined
add(1,2)
3
add(3,4)
7
add('a','b')
"ab"

///////////
function test(a,b) {
    return a,b
}

test(1,2)
2

function test(a,b) {
    var out = [a,b]
    return out
}

test(1,2)

//////
method> when function assign to a variable
////////
var add = function(a,b){
    return a+b
}

add(1,2)
3


function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}
undefined
isEven(10)
"Number 10 is even"
isEven(11)
"Number 11 is odd"