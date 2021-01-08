regex 
Regular Expression 

var a = "hi";

^$

var a = "hii";
a.match("^([a-z]{2})$")
null

var a = "h";
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

var a = "hii";
a.match("^([a-z]{2})$")
null
var a = "hii";
a.match("^([a-z]{3})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
var a = "hiiewewger";
a.match("^([a-z]+)$")
(2) ["hiiewewger", "hiiewewger", index: 0, input: "hiiewewger", groups: undefined]

var a = "hiiA";
a.match("^([a-z]{2})$")
null


var a = "hiiA";
a.match("^([a-zA-Z]+)$")
(2) ["hiiA", "hiiA", index: 0, input: "hiiA", groups: undefined]


var a = "hii";
a.match("^([a-zA-Z0-9]{2,5})$")

var phone = 8943278568
phone.match("^([0-9]{10})$")
VM111:2 Uncaught TypeError: phone.match is not a function
    at <anonymous>:2:7
(anonymous) @ VM111:2
phone.toString().match("^([0-9]{10})$")

(2) ["8943278568", "8943278568", index: 0, input: "8943278568", groups: undefined]
var phone = 894327856

undefined
phone.toString().match("^([0-9]{10})$")
null


var email = "a@a.com";

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
    
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]0: "a@a.com"1: "a"2: "a"3: "com"groups: undefinedindex: 0input: "a@a.com"length: 4__proto__: Array(0)
var email = "a@a";

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "@a.com";

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a.com";

email.match("^([a-zA-Z0-9$]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]

var str = "That's hot haat!";
var patt1 = /h..t/g;

var str = "Give $ 100%!"; 
  var patt1 = /\w/g;

  var str = "Give 100%!";
  var patt1 = /\W/g;
  ,%,!

  var str = "Give 100%!"; 
  var patt1 = /\D/g;
  G,i,v,e, ,%,!

  var str = "Give 100%!"; 
  var patt1 = /\d/g;
  1,0,0