JAVASCRIPT – BEGINNER

javascript – programming language and plays crucial role in web development

Link your .js file with .html
Inside your .html body use the following
<body>
  <script src="app.js"></script>
</body>
and inside app.js give your js script
alert : alert("message")
Console methods :
console.log("")
console.error("")
console.table({name:"",age:19})
console.clear()
comments : // - single line

variables: 
store data or reuse them
let , var, const are variable types
var is not used mostly use let
let name;
name = "sudha";
console.log(name);
cannot use -,numbers at beginning
convention : youtubeChannel or youtube_channel(camelcase or kababcase)
Diff between let and const
let y = "haru";
y = "sharu";
console.log(y);
gives error as const declared variable cannot be changed
const z = "haru";
z = "sharu";
console.log(z);

Primitve types:
Number: supports int,float and all arithmetic operations
let num = 10;
console.log(2%2);
console.log(2**2);
num++;
num--;
console.log(num);
to get the type of variable
console.log(typeof num);
Boolean : true,false
let isTrue = true;
console.log(isTrue);
Falsy values : false,null,undefined,0,-0,NaN,"",'',``
Comparison operators:
->Relational operators: >,<,>=,<=,
->Equality Operators: === strict equality(type+value),!== strict not equal(type+value), == loose equality, != loose not equality(checks value)
String:
let x= `sudha`;
let y = "sai";
console.log(x+y); //sudhasai
console.log(x.concat(y)); //concat
console.log(x+="Gadre"); //append
console.log(x.length); //length
console.log(x.toLowerCase()); //to lower case
console.log(x.toUpperCase()); // to upper case
console.log(x.slice(0,3)); //slices your string(sud) --excludes the end
console.log(x.split('')); // split string based on seperator and return array
console.log(x.split('').join('')); // joins the splitted string based on seperator
console.log(x.includes('u')); //checks for substring in string and returns Boolean
console.log(x.trim()); //removes all empty space from string
console.log(`${x} ${y} gadre`) // displays all

TypeConversion:
//convert string to number
let money ="50";
money = parseInt(money);
console.log(typeof money); //displays number
money = +money; //displays number
money = Number(money) //displays number

//convert number to string
let money = 50;
money = money.toString();
console.log(typeof money); //displays string
money = String(money) //displays string

//convert string to float
let money ="50.5";
money = parseFloat(money);
console.log(typeof money); //displays number


ControlFlow:
