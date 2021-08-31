//variables
let js= 'amazing';
console.log(34+3444-35);
let firstName="jonas";
console.log(firstName);
//this is the comment line
console.log(typeof firstName);//typeof operator
//var let constant keywords
let age=45;
age=50;//can be change by using let-mutable
const birth=1999;//cannot change -immutable
var job="programmer";
job="teacher";//same as let
lastName="surya";//no need of using var,let 
console.log(lastName);
//arithmetic operators
const ageArun=2021-1999;
const ageKumar=ageArun-1998;
console.log(ageArun,ageKumar);
console.log(ageArun*2);
console.log(ageArun**3);//power
const Name="arun";
const SurName="karanam";
console.log(Name+' '+SurName);
//assignment operator
let x=10+5;
x+=10;
x++;
x--;
console.log(x);
//comparision operators >,<,>=,<=
console.log(ageArun>ageKumar);
//operator precedence
let a,b;
a=b=25-10-5;
console.log(a,b);
const avgAge=ageArun+ageKumar/2;
console.log(ageArun,ageKumar,avgAge);
//string template literals
const arunNew=`I am ${Name} ${SurName}`;
console.log(arunNew);
console.log('string with \n\
multiple \n\
lines')
console.log(`string
is 
sequence of 
chars`)
//statements-if/if else
if(ageKumar>0)
{
    console.log("hai");
}
else{
    console.log(`hello`)
}
//Typeconversion and typecoercion
//typeconversion -manually

const inputYear='1998';
console.log(inputYear+39);
console.log(Number(inputYear)+39,inputYear);
console.log(Number('arun')+39,inputYear);
console.log(String(34));
//typecoercion-automatically
console.log(`i am ` +21+ ` years old`);
// minus will convert to number automatically
console.log('54'-'23'-3);
// plus will convert to string automatically
console.log('54'+'23'+3);
console.log('23'/'2');
console.log('23'>24);
console.log(2+3+4+'5');
let e=2+3+4+'5';
console.log(typeof(e));
console.log('10'-'4'-'3'-2+'5');

//5 falsy values : 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('rt'));
console.log(Boolean({}));
//Equality operators  ==,===
const num='3';
if(num==3){
    console.log("hai");

}
if(num==='3'){
    console.log("hello");

}
const details=prompt("What is your name?");
console.log(details);
console.log(typeof details);
//conditional operators  ? :
const umr=19;
(umr>18)?console.log("Major"):console.log("Minor");
