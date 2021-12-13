const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const generatePage = require('../src/page-template')

function Program() {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

Program.prototype.initializeProgram = function() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your id number?'
        },
        {
            type: 'number',
            name: 'phone',
            message: 'What is your phone number?'
        }
        ])
        .then(({ name, email, id, phone }) => {
            this.manager = new Manager(name, email, id, phone);

            console.log(this.manager)
            this.initializeEmployees();
        })
};

Program.prototype.initializeEmployees = function() {
    inquirer
        .prompt({
            type: 'list',
            message: 'Who else would you like to add?',
            name: 'action',
            choices: ['Add Engineer', 'Add Intern', 'Add No One']
        })
        .then(({ action }) => {
            if (action === 'Add Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'text',
                            name: 'name',
                            message: 'What is the name of the employee?'
                        },
                        {
                            type: 'text',
                            name: 'email',
                            message: 'What is the email address of the employee?'
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "What is the employee's ID?"
                        },
                        {
                            type: 'text',
                            name: 'school',
                            message: 'What school does the employee attend?'
                        }
                    ])
                    .then(({ name, email, id, school }) => {
                        this.interns.push(new Intern(name, email, id, school));
                        console.log(this.interns);
                        this.confirmationMessage();
                    })
            } else if (action === 'Add Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'text',
                            name: 'name',
                            message: 'What is the name of the employee?'
                        },
                        {
                            type: 'text',
                            name: 'email',
                            message: 'What is the email address of the employee?'
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "What is the employee's ID?"
                        },
                        {
                            type: 'text',
                            name: 'github',
                            message: "What is the employee's Github username?"
                        }
                    ])
                    .then(({ name, email, id, github }) => {
                        this.engineers.push(new Engineer(name, email, id, github));
                        console.log(this.engineers);
                        this.confirmationMessage();
                    })
            } else if (action === 'Add No One') {
                this.finalizeOutput();
            }
        })
}

Program.prototype.confirmationMessage = function() {
    inquirer
        .prompt({
            type: 'list',
            name: 'choice',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        })
        .then(({ choice }) => {
            if (choice === 'Yes') {
                this.initializeEmployees();
            } else if (choice === 'No') {
                this.finalizeOutput();
            }
        })
}

Program.prototype.finalizeOutput = function() {
    
}

module.exports = Program;