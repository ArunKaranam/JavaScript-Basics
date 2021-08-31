'use strict';
let hasDriversLicense=false;
const passTest=true;
if(passTest)
hasDriversLicense=true;
if(hasDriversLicense)
console.log(`i can drive`);
//function--code which can be reused
function logger()
{
    console.log("My name is Arun");

}
//calling/running/invoking function
logger();
logger();
logger();

/*function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}*/
const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,2));
//Function Declaration
function calAge1(birthyear)
{

    //const age=2037-birthyear;
    return 2037-birthyear;
}
console.log(calAge1(1999));

//Anononous function/function expression
//const calAge2=function(birthyear)
//{
    //return 2037-birthyear;

//}
//const age2=calAge2(1999);
//console.log(age2);

//Arrow Function-shorter code
const calAge3=birthyear=>2037-birthyear;
console.log(calAge3(1999));

const yearsUntiRetirement=(birthyear,firstName)=>{
    
    const age=2037-birthyear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntiRetirement(1991,"arun"));
console.log(yearsUntiRetirement(1992,"karanam"));

function cutFruitPieces(fruit){
    return fruit*4;
}
//one function calling in another function
function fruitProcessor(apples,oranges)
{
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);

    console.log(apples,oranges);
    const juice=`Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));


//Arrays-Data Structure which stores multiple related values in single variable
const friends=['arun','karanam','aswarth'];
console.log(friends);
//another way
const abc=new Array(1829,13691,1831);
console.log(friends[0]);
console.log(friends[2]);
//length of an array
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[1]='Ajay';
console.log(friends);
const xyz=[friends,'karanam',2037-1999,'developer',friends];
console.log(xyz);
//array methods
const gang=['arun','ajay','aswarth'];
const newgang=gang.push('bhanu');
console.log(gang);
console.log(newgang);
gang.unshift('naveen');
console.log(gang);
//remove
const popped=gang.pop();
console.log(gang);
console.log(popped);
gang.shift();
console.log(gang);
console.log(gang.indexOf('arun'));
console.log(gang.includes('naveen'));//strict operator

//Objets-Data structure-group together different variables belong together such as properties
const myData={//object
    Name:'Arun',//properties
    Surname:'Karanam',
    pAge:2021-1999,
    job:'PAT',
    team:['manoj','revanth','arvind']

};
console.log(myData);
console.log(myData.job);//dot notation
console.log(myData['job']);//bracket notation

const nameKey='Name';
console.log('first' +nameKey);
console.log('last' +nameKey);
// console.log(myData.'Name'+nameKey);//illlegal
const interestedIn=prompt("what do you want to know ?");
if(myData[interestedIn]){
    console.log(myData[interestedIn]);

}
else{
    console.log('wrong request');

}
myData.location='chennai';
myData['mail']='@gmail.com';
console.log(myData);

const noFr=myData.team.length;
console.log(`${myData.Name} has ${noFr} friends and his best friend is ${myData.team[0]}`);

//object methods
const hisData=
{//object
    Name:'Karanam',//properties
    Surname:'Arun',
    pAge:1999,
    job:'PAT',
    team:['manoj','revanth','arvind'],
    hasLicense:true,
  /*  calAge2 :function(birthyear)
{
    return 2037-birthyear;

}*/
/*calAge2 :function()
{
    console.log(this);
    return 2037-this.birthyear;

}*/
calcAge:function(){
    this.age=2037-this.pAge;
    return this.age;
},
getSummary:function()
{
    return `${this.Name} is a ${this.calcAge()} year old ${hisData.job}, and he has ${this.hasLicense? 'a':'no'} drivers license.`;

}
    

};
//console.log(hisData.calAge2(1991));
//console.log(hisData['calAge2'](1991));
console.log(hisData.calcAge());
console.log(hisData.age);
console.log(hisData.getSummary());
//loops
//for loop
for(let rep=1;rep<=10;rep++)
{
    console.log(`HAi ${rep}`);

}
const herData=
[
    'komali',
    'kumari',
    1999,
    'PAT',
    ['manoj','revanth','arvind']
    
];
const types=[];
for(let i=0; i<herData.length;i++)
{
    console.log(herData[i],typeof herData[i]);
    //console.log(herData);
    types[i]=typeof herData[i];

}
console.log(types);

const bYears=[1999,2446,2019,3726];
const agess=[];
for(let i=0;i<bYears.length;i++){
    agess.push(2037-bYears[i]);
}
console.log(agess);

//continue and break
//continue is used to exit the current iteration of the loop and goes to the next loop
console.log('---only strings---');
for(let i=0;i<bYears.length;i++){
    if(typeof herData[i]!=='string') continue;
    console.log(herData[i],typeof herData[i]);
}
//break is used to completely terminate the loop
console.log('---BREAK WITH NUMBERS---');
for(let i=0;i<bYears.length;i++){
    if(typeof herData[i]==='number') break;
    console.log(herData[i],typeof herData[i]);
}
//looping backwards
for(let i=herData.length-1;i>=0;i--){
    console.log(i,herData[i]);
}
//loop inside a loop
for(let exercise=1;exercise<4;exercise++){
    console.log(`-----Starting Exercise ${exercise}`);
    for(let rep=1;rep<6;rep++){
        console.log(`Exercise ${exercise} Hello Arun ${rep}`);
    }
}
//while loop
let rep=1;
while(rep<=10){
    console.log(`WHILE :Hello Arun ${rep}`);
    rep++;
}
let dice=Math.trunc(Math.random()*6)+1;
while(dice!=6){
    console.log(`you rolled a ${dice}`);
    dice=Math.trunc(Math.random()*6)+1;
    if(dice===6) console.log(`Loop is about to end`);
}




