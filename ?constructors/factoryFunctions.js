const personalFactory = (name, age) => {
    const sayHello = () => console.log('hello!!');
    return { name, age, sayHello };
};

const jeff = personalFactory('jeff', 27); 

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello'


///// same example using the constructor example 

cont Person = function (name, age) {
    this.sayHello = () => console.log('hello');
    this.name = name;
    this.age = age;

}; 

const jeff = new Person('jeff', 27); 

//////////////////

const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
}; 

const taco = FactoryFunction('taco'); 

printString(); //Error!1 
capitalizeString(); // Error!!1 
taco.capitalizeString(); 
taco.printString(); //////this prints ""


