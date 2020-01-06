
/*******************************
Variables and data types 
*/
/*
var firstName = 'Louis';
var lastName  = 'Grimaldi';
var age       = 22;
var isTrue    = false;
// var delete = 3;

console.log(firstName + ' ' + lastName + ' ' + parseFloat(age) + ' ' + isTrue);
console.log(job);
// console.log(delete);

var job, isMarried;
job       = 'data engineer';
isMarried = null;

// Type coercion
console.log( firstName + ' is  a  ' + age + ' year old ' + job + '. Is he married? ' + isMarried );

// Variable mutation
age = 'twenty eight';
*/
// alert
// alert(firstName + ' ' + lastName + ' is coding this app.')

// prompt
// var lastName = prompt('What is his last name ?');
// console.log(firstName + ' ' + lastName);

/*********************************
Basic operators
*/

/*
var year = 2020
var yearLouis  = year - 23;
var yearConnor = year - 26;
console.log(yearConnor);
*/
/*

var year, yearLouis, yearConnor;
now = 2020
yearLouis = now - 23;
yearConnor = now - 26;
console.log(yearLouis - yearConnor);
console.log(now * 2)
console.log(now / 2)
console.log(now / 1.5)
console.log(now % 17)

// Logical operators
var louisOlder = yearConnor > yearLouis;
console.log(louisOlder);
console.log(typeof louisOlder);
console.log(typeof 'this is a string')

var x;
console.log(typeof x);
*/
/****************************
Operator precedence
*/
/*

var now = 2020;
var yearLouis = 1997;
var fullAge = 18;

var isFullAge = now - yearLouis >= fullAge;
console.log('Is Louis older than 18? ' + isFullAge);
var ageLouis = now - yearLouis;
var ageConnor = 26;
var averageAge = (ageLouis + ageConnor) / 2;
console.log(averageAge)

//Multiple assignments

var x;
x = y = 256;
console.log(x+y);

*/
/*
CODING CHALLENGE 1
*/

/*
var markWeight = 75;
var johnWeight = 91;
var markHeight = 1.78;
var johnHeight = 1.99;

var markBMI = markWeight / Math.pow(markHeight, 2);
var johnBMI = johnWeight / Math.pow(johnHeight, 2);

var isMarkBMIHigher = markBMI > johnBMI;
console.log(isMarkBMIHigher);
console.log('Is Mark\' s  BMI higher than John\'s ? ' + isMarkBMIHigher);


function getRandomArbitrary(min, max){
    
    return Math.random() * (max - min) + min;
    
}

*/
/*******************************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    
    console.log(firstName + ' is married !');
        
} else {
    
    console.log(firstName + ' is single !');
}

var isMarried = false ; 

if (isMarried){
    
    console.log(firstName + ' is married !')
    
} else {
    
    
    console.log(firstName + ' is single !')
}

var markBMI = markWeight / Math.pow(markHeight, 2);
var johnBMI = johnWeight / Math.pow(johnHeight, 2);

if (markBMI > johnBMI) {
    
    console.log('Mark\'s BMI is higher than John\'s !')
    
} else{
    
    console.log('John\'s BMI is higher than Marks\'s !')
}



var markAge = getRandomArbitrary(0, 75);

if (markAge < 10) {
    
    console.log('Mark is a child');
    
} else if (markAge < 18) {
    
    console.log('Mark is a teenager');

} else if (markAge < 60) {
    
    console.log('Mark is an adult');

} else {
    
    console.log('Mark is a senior');
}



var i;
var numOfIterations = 10000;
var a = b = c = d = 0;
for (i=0; i < numOfIterations; i++){
    
    var randNum = getRandomArbitrary(0, 100);
    
    if (randNum < 25) {

        a++;
    
    } else if (randNum < 50) {
        
        b++;
        
    } else if (randNum < 75) {
        
        c++;
    
    } else {
        
        d++;
        
    }
    
}

console.log('a: ' + a/numOfIterations*100 + '%');
console.log('b: ' + b/numOfIterations*100 + '%');

console.log('c: ' + c/numOfIterations*100 + '%');
console.log('d: ' + d/numOfIterations*100 + '%');

*/

/************************
Ternary operator and switch statements
*/

/*

var firstName = 'Louis'
var age = 25;

switch (true) {
        
    case (age < 13):
        console.log(firstName + ' is a child');
        break;
        
    case (age >= 13 && age <20):
        console.log(firstName + ' is a teenager');
        break;
        
    case (age >= 20 && age <60):
        console.log(firstName + ' is an adult');
        break;
        
    case (age >= 60 ):
        console.log(firstName + ' is a senior');
        break;
        
    default :
        console.log('age is undefined for ' + firstName);
        
}







age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(firstName + ' drinks '+ drink);

var job = 'teacher';
switch (job) {
        
    case 'teacher' :
        console.log(firstName + ' teaches young students how to code');
        break;
        
    case 'driver' :
        console.log(firstName + ' drives a Uber in London');
        break;
        
    case 'police officer' :
        console.log(firstName + ' arrests bad guys');
        break;
        
    default :
        console.log(firstName + ' does something else');
        
}  

*/


/**********************************
Truthy and Falsy values in JS
*/

/*

var height = 1;

if (height) {
    
    console.log('Variable is defined');
    
} else {
    
    console.log('Variable is not defined');
    
}

isEqual = ('1' === 1)
console.log(isEqual)

*/

/****************************************
CODING CHALLENGE 2 
*/

/*
var johnAvgScore = (89+120+124)/3;
var mikeAvgScore = (116+94+126)/3;
var maryAvgScore = (97+134+105)/3;


console.log('John\' s team average score is ' + johnAvgScore);
console.log('Mike\' s team average score is ' + mikeAvgScore);

var winnerString = 'The winners are : ';

if (mikeAvgScore === Math.max(johnAvgScore, maryAvgScore, mikeAvgScore)) {
    
    winnerString += 'Mike\'s team with ' + mikeAvgScore + ' points. ';
    
}

if (johnAvgScore === Math.max(johnAvgScore, maryAvgScore, mikeAvgScore)) {
    
    winnerString += 'John\'s team with ' + johnAvgScore + ' points.';
    
}

if (maryAvgScore === Math.max(johnAvgScore, maryAvgScore, mikeAvgScore)) {
    
    winnerString += 'Mary\'s team with ' + maryAvgScore + ' points.';
    
}

console.log(winnerString);

*/

/***********************************
Functions
*/


/*
function calculateAge(birthYear){ 

    return(2020 - birthYear);

}

function yearsUntilRetirement(year, name){
    
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        
        console.log(name + ' still has ' + retirement + ' years to go until retirement');
        
    } else if (retirement === 0) {
        
        console.log(name + ' retired this year.');
    
    } else {
        
        console.log(name + ' retired ' + (-retirement) + ' years ago.')
    }
      
    
}

yearsUntilRetirement(1955, 'Louis')
*/


/******************
Function statements and expressions
*/

/*

var whatDoYouDo = function(job, firstName) {
    
    switch (job) {
        
    case 'teacher' :
        return(firstName + ' teaches young students how to code');
        break;
        
    case 'driver' :
        return(firstName + ' drives a Uber in London');
        break;
        
    case 'police officer' :
        return(firstName + ' arrests bad guys');
        break;
        
    default :
        return(firstName + ' does something else');
        
    }  
   
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Connor'));
console.log(whatDoYouDo('police officer', 'Mary'));
console.log(whatDoYouDo('bad guy', 'Louis'));

whatDoYouDo('anything', 'Neil');

*/

// Initialise new array

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1997, 1994)

console.log(names[1]);
console.log(names);


// Mutate array data
names[1] = 'Ben'
console.log(names)


var john = {

    firstName : 'John',
    lastName  : 'Docker',
    birthYear : 1990,
    family    : ['louis', 'claire', 'carl', 'pf', 'isabel'],
    calcAge   : function(){
        this.age = 2020 - this.birthYear;
    }

}

john.age = john.calcAge();

console.log(john.calcAge());
console.log(john.age);

*/

/*

var mark = {

    name : 'Mark Docker',
    height : 1.82,
    weight : 75

}

var john = {

    name : 'John Smith',
    height : 1.95,
    weight : 99

}


mark.calcBMI = function() {

    mark.bmi = mark.weight / mark.height * mark.height;

}

john.calcBMI = function() {

    john.bmi = john.weight / john.height * john.height;

}


mark.calcBMI();
john.calcBMI();

console.log(mark.bmi);
console.log(john);


if (mark.bmi < john.bmi) {

    console.log('John has the highest BMI');

} else if (mark.bmi === john.bmi) {

    console.log('John and Mark have the same BMI');

} else {

    console.log('Mark has the highest BMI');

}

*/

/*

var john = {

    fullname : 'John Smith',
    height : 1.95,
    weight : 99,
    calcBMI : function() {

        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;

    }

}

var mark = {

    name : 'Mark Docker',
    height : 1.82,
    weight : 75,
    calcBMI : function() {

        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }

}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

*/


/******************************************
 * Loops and iteration
 */

/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++){

    
    if (typeof john[i] !== 'string') continue;
    

    console.log(john[i])

}

for (var i = 0; i < john.length; i++) {

    if (typeof john[i] !== 'string') break;
    console.log(john[i]);

}



var i = 0;
while(i < john.length) {

    
    console.log(john[i]);
    i++;

}

console.log(john.length);


var numbers = [0,1,2,3,4,5,6,7,8,9];

for (var i = numbers.length - 1 ; i >= 0 ; i-- ){

    console.log(i)

}

*/

var johnBill = {

    bills : [124, 48, 268, 180, 42],
    calcTip : function() {

        this.tips = [];   
        for (var i = 0; i< this.bills.length ; i ++){

            if (this.bills[i] < 50) {
                var tip = 0.2 * this.bills[i];
            } else if (this.bills[i] < 200) {
                var tip = 0.15 * this.bills[i];
            } else {
                var tip = 0.10 * this.bills[i];
            }

            this.tips[i] = tip;

        }

    },

    calcTotal : function() {

        this.total = [];
        for (var i = 0; i < this.tips.length; i++) {

            this.total[i] = this.bills[i] + this.tips[i];

        }

    } 

    
}


var markBill = {

    bills : [77, 375, 110, 45],
    calcTip : function() {

        this.tips = [];   
        for (var i = 0; i< this.bills.length ; i ++){

            if (this.bills[i] < 100) {
                var tip = 0.2 * this.bills[i];
            } else if (this.bills[i] < 300) {
                var tip = 0.10 * this.bills[i];
            } else {
                var tip = 0.25 * this.bills[i];
            }

            this.tips[i] = tip;

        }

        return this.tips;


    },

    calcTotal : function() {

        this.total = [];
        for (var i = 0; i < this.tips.length; i++) {

            this.total[i] = this.bills[i] + this.tips[i];

        }

        return this.total;

    }

    
}

markBill.calcTip();
markBill.calcTotal();
johnBill.calcTip();
johnBill.calcTotal();


function calcAvgTip(tips) {

    var avg = 0

    for (var i = 0 ; i<tips.length ; i++){

        avg += tips[i];
    }

    avg /= tips.length;
    return avg;

}

console.log(calcAvgTip(markBill.tips), calcAvgTip(johnBill.tips));










































