function validateFname(){
    var name = document.getElementById('fname').value;
    if(name==' '||name==''){
        document.getElementById('fout').innerText="Please enter first name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validateEmail = () => {
    var email = document.getElementById('email').value;
    if(email==' '||email==''){
        document.getElementById('eout').innerText="Please enter email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") ==null){
            document.getElementById('eout').innerText="Please enter valid email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}


function validatePassWord(){
    var pwd =document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min Length of pwd is 8";
            document.getElementById('ppout').style.background="red";
            document.getElementById('ppout').style.visibility="visible";
        }else if(pwd.length<10){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.background="orange";
        }
    }else{
        document.getElementById('ppout').style.background="green";
    }
}

function validateCPassWord(){
    var pwd =document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="password does not match";
    }else{
        document.getElementById('cpout').innerText="";
    }
}

const getExp = () => {
    const exp = document.getElementById('exp').value;
    document.getElementById('expout').innerText=`Total year of exp is ${exp}`;
}