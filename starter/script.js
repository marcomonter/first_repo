
// constructor function
var Person = function(name, birthday, job){
    this.name = name;
    this.birthday = birthday;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    console.log(2019 - this.birthday);
};

var marco = new Person("Marco M.", 1986, "FS Web developer");
var fanny = new Person("Estefany V.", 1990, "Digital Artist");
var hugo = new Person("Hugo D.", 1990, "Finance & Logistics Professional");


marco.calculateAge();
fanny.calculateAge();
hugo.calculateAge();

// object.create

var paxProto = {
    ageCalc: function(){
        console.log(2019 - this.birthday);
        
    }
};


function interviewQuestion(job){
    if(job === "designer"){
        return function(name){
            console.log(name + " PLease explain is what UX design is");
            
        }
    } else if(job === "teacher"){
        return function(name){
            console.log("What subjet do tyou teach " + name);
            
        }
    } else {
        return function(name){
            console.log(name  + " What do you do for living?");
            
        }
    }
}

var teachQuestion = interviewQuestion("teacher");
teachQuestion("Marco");

interviewQuestion("designer")("fanny");

// IIFE Inmmediatly invoked function expressions 
// used to define private variables
// wrapping the function in parentesis tricks JS parser to think of the function as an expression instead of declaration

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();