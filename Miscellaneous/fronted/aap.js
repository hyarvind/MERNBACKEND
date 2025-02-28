///constrators =does not return anything & satrts with capital letter
// function Person(name, age){ /// this is constructor function
//     const person = {
//         name: name,
//         age: age,
//     };
// }
// person.prototype.talk = function(){
//     console.log('Hello I am '+ this.name);
// };
// let p1 = new Person('Arvind', 21); 
// let p2 = new Person('Rahul', 22);
// let p3 = new Person();

//// to create a class & constructor in js
///// TO AUTO CREATE prototype
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log('Hello I am '+ this.name);
//     }
// }
// let p1 = new Person('Arvind', 21);
// let p2 = new Person('Rahul', 22);

///// to create a class & instance in js............
///// to instantiate a class
class persons{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
talk(){
    console.log('Hello I am '+ this.name);
}
}
//// create a class 
class student extends persons{
    constructor(name, age, marks){
      super(name, age);   //// call to cunstructor parent class
        this.marks = marks;
}
}
let s1 = new student('Arvind', 21, 90); 

class teacher extends persons{
    constructor(name, age, salary){
        super(name, age); //// call to cunstructor parent class
        this.salary = salary;
    }
}
let t1 = new teacher('Arvind', 21, 90000);

// function PersonMaker(name, age){  /// this is factory function
//     const person = {
//         name: name,
//         age: age,
//         talk (){
//             console.log('Hello I am '+ this.name);
//         },
//     };
//     return person;
// }
// let p1 = PersonMaker('Arvind', 21); // copy of person object
// let p2 = PersonMaker('Rahul', 22); // copy of person object

// const stu1 ={
//     name: 'Arvind',
//     age: 21,
//     marks: 90,
//     getMarks: function(){
//         return this.marks;
//     },
// };
// const stu2 ={
//     name: 'Rahul',
//     age: 22,
//     marks: 80,
//     getMarks: function(){
//         return this.marks;
//     },
// };
// const stu3 ={
//     name: 'Raj',
//     age: 23,
//     marks: 70,
//     getMarks: function(){
//         return this.marks;
//     },
// };