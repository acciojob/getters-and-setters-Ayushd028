//complete this code
class Person {
	constructor(name, number){
		this.name = name;
		this.age = age;
	}

	get name(){
		return this.name;
	}
	set name(newName){
		return this.name = newName
	}
	
}

class Student extends Person {

	constructor(name, number){
		super(name, number)
	}
	
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name, number){
		super(name, number)
	}
	study(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
