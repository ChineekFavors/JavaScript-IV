// CODE here for your Lambda Classes
class Person {
	constructor(attributes){
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
	}
	speak(){
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	};
}



class Instructor extends Person {
	constructor(attributes) {
		super(attributes);
		this.specialty = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase; 
	}
	demo(subject){
		return `Today we are learning about ${this.subject}`;
	};

	grade(studentObject, subject){
		return `${studentObject} receives a perfect score on ${subject}`;
	};
}


class Student extends Person {
	constructor(attributes){
		super(attributes);
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects
	}
	listsSubjects(){
		return `${this.favSubjects}`;
	}
	prAssignment(subject){
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject){
		return `${this.name} has begun sprint chammenge ${subject}`;
	}

}

const chineek = new Student({name: 'chineek', age: 44,location: 'Oakland Ca', specialty: 'html', favLanguage: 'css' , catchPhrase: 'I can learn JavaScript with practice', previousBackground:'driver', className: 'webpt7', favSubjects: ['js','html','css']});



class ProjectManager extends Instructor {
	constructor(attributes){
		super(attributes);
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}
	standUp(channel, name){
		return `${name} announces to ${channel}, @channel standy times!`;
	};

	debugsCode(obj){
		return `${obj.name} debugs code on ${obj.favSubjects[1]}`;
	};
}

let sean = new ProjectManager({name: 'sean', age: 28, location: 'San francisco Ca', specialty: 'JavaScript', favLanguage: 'Js' , catchPhrase: 'I will be your PM', previousBackground:'student', className: 'webpt6', gradClassName: 'cs1', favInstructor: 'Pope' });
console.log(sean.debugsCode(chineek));




















