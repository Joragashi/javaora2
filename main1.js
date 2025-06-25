// function showMessage(){

//     alert("hello this is a message");
// }

// showMessage();

// function sum (num1,num2){
//     return num1 + num2;
// }

// console.log(sum(25,5));

// function toCelsius(f){

//     return (5/9)*(f-32);

// }
// function toSeconds(m){

//     return m * 60;

// }

// console.log(toSeconds(60));



var car ={

name: "Audi",
color:"red",
year:2020,
kilo:0



starterEngine:function(){


    alert("vroommm!!!!!");

},

    get getkilo(){

    return this.kilo;

    
    },

    set setkilo(km){
        this.kilo=km;


    }
    get getyear(){
        return this.year;

    },

    set setyear(y){
        this.year=y;
    }
};

console.log(car.name);
console.log(car.color);
console.log(car.kilo);
car.setKilo=100000;
console.log(car.year);
car.setyear=2021


var computer= new Object();
computer.name="lenovo";
computer.GPU ="4080";
computer.RAM="16gb";
computer.CPN = "intel core i7";

computer.type = function(){
    return this.name+ " , "+ this.CPU + " , "
}