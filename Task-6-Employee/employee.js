class Employee {
    constructor(compantId,departmetId,firstName,lastName,emailId,age,salary) {
       this.compantId =compantId;
       this.departmetId = departmetId;
       this.firstName = firstName;
       this.lastName = lastName;
       this.emailId = emailId;
       this.age = age;
       this.salary = salary;
    }
    calculateBonus(){
        console.log(`Employee Bonus : ${this.salary * 0.05}`);
    }
}

class Manager extends Employee{
    constructor(compantId,departmetId,firstName,lastName,emailId,age,salary,subordinates){
        super(compantId,departmetId,firstName,lastName,emailId,age,salary);
        this.subordinates = subordinates;
        console.log(`subordinates : ${this.subordinates}`);
    }
    calculateBonus(){
        console.log(`Manager Bonus : ${this.salary * 0.15}`);
    }
}

class Engineer extends Employee{
    constructor(compantId,departmetId,firstName,lastName,emailId,age,salary,projectsCompleted){
        super(compantId,departmetId,firstName,lastName,emailId,age,salary);
        this.projectsCompleted = projectsCompleted;
        console.log(`projectsCompleted : ${this.projectsCompleted}`);
    }
    calculateBonus(){
        console.log(`Engineer Bonus : ${this.salary * 0.10}`);
    }
}

const Engineer1 = new Engineer("abc","Site stock","mari","murugan","mari@gmail.com",28,10000,5);
Engineer1.calculateBonus();


const Employee1 = new Employee("abc","accountant","kiran","v","kk@gmail.com",28,5000);
Employee1.calculateBonus();

const Manager1 = new Manager("abc","team manager","v","babu","v@gmail.com",28,20000,20);
Manager1.calculateBonus();