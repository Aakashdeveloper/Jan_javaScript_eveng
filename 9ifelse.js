if(condition){
    //do something
}else{
    //do something
}

var a = 87898;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 87898 is even

var a = 8789;
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name= "Priya";


if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Lisa"){
    console.log(`Hi ${name} you are Super Admin`)
}else if(name=="Hitesh"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} i don't know you`)
}

Hi Priya you are admin;



var role = "Admin";
var name = "John";

if(role=="Admin"){
    if(name=="John"){
        console.log(`Hi ${name} your role is admin`)
    }else if(){

    }else{

    }
}else if(role=="User"){
    if(name=="John"){
        console.log(`Hi ${name} your role is admin`)
    }else if(){

    }else{

    }
}else{

}

//////////////
var name = "Tina"
if(name=="John" || name=="Tina" || name=="Bhumika"){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}

var name = "Tina"
var role= "Admin"
if(name=="John" && role=="Admin"){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}

var name = "John"
var role= "User"
if(name=="John" && (role=="Admin"||role=="User")){
    console.log(`Hi ${name} your welcome`)
}else{
    console.log(`Hi ${name} your not allowed`)
}


var a = 1
if(a){
    console.log("Hii")
}else {
    console.log("Bie")
}

var a = 0
if(a){
    console.log("Hii")
}else {
    console.log("Bie")
}


////////////////
Ternary(single line if else condition)
////
var a = 10
a>10 ?"Hiii":"Biee"
"Biee"

var a = 10
a==10 ?"Hiii":"Biee"
"Hiii"


var a = 10
a==10 ?a+1:a-1
11

var a = 10
a>10 ?a+1:a-1
9


/////wrong////
var a = 10
a==10 ?a+1:a-1?"Hii":"Bieee"
11
var a = 10
a>10 ?a+1:a-1?"Hii":"Bieee"
"Hii"