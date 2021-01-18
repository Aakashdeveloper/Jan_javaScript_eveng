for
while loop
do while loop
for of
for in  > object
////
map 
filter

///////////////////////
for> generate series of value or iterate over Array
///////////

for(var i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}
London
VM40:4 Paris
VM40:4 NewYork
VM40:4 Delhi
VM40:4 Amsterdam
VM40:4 Venice

for(i=0;i<city.length;i++){
    console.log(`My city is ${city[i]}`)
}

My city is London
VM45:2 My city is Paris
VM45:2 My city is NewYork
VM45:2 My city is Delhi
VM45:2 My city is Amsterdam



var city = ["London", "Paris", "NewYork",['Audi','BMW','Kia'] ,"Delhi", "Amsterdam", "Venice"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
    
}

///////
while
/////////

var i = 10;
while(i<5){
    console.log(i);
    i++
}



///////
Do while
/////////
var i =10;
do{
    console.log(i);
    i++
}
while(i<5);

/////
for of
////
var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice"]

for(mycity of city){
    console.log(mycity)
}

var city = ["London", "Paris", "NewYork",['Audi','BMW','Kia'] ,"Delhi", "Amsterdam", "Venice"]

for(mycity of city){
    if(Array.isArray(mycity)){
        for(cars of mycity){
            console.log(cars)
        }
    }else{
        console.log(mycity)
    }
}