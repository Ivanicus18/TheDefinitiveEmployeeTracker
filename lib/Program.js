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
        })
}

module.exports = Program;