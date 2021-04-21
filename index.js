// Your code here
  class Cat {
      constructor(name, sex){
    this.name = name;
    this.sex = sex;
      }
      speak(){
          let message = ' says meow!'
        return this.name + message
      }
  }
  
  class Dog {
      constructor(name, sex){
    this.name = name;
    this.sex = sex;
      }
      speak(){
        let message = ' says woof!'
      return this.name + message
    }
  }
  
  class Bird{
      constructor(name, sex){
    this.name = name;
    this.sex = sex;
      }
    speak(){
        if(this.sex === 'male') 
      return (`It's me! ${this.name}, the parrot!`)
      else
      return  (`${this.name} says squawk!`)
    }
  } 

 