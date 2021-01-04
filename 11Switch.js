//multiple condition and multiple output(if else)
//one condition and multiple output(switch)
//one condition one output(ternory)

var name = "Eva"

switch(name){
    case 'Aakash':
        console.log(`Hi ${name} you are user`);
        break;
    case 'Eva':
        console.log(`Hi ${name} you are admin`)
        break;
    default:
        console.log(`Hi ${name} i dont know you`)
}


switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`); 
        break;
    case 1:
        console.log(`Today is Monday`); 
        break; 
    default:
        console.log(`Wrong Input`)
}
Today is Monday

var out = new Date().getDay();
if(out == 0){
    console.log(`Today is sunday`); 
}else if(out == 1){
    console.log(`Today is Monday`); 
}