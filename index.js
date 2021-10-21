// npm init -y starts an npm project, creates a package.json
// npm install inquirer
// start coding

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

// user prompt with questions for readme using promptUser and inquirer

function promptUser(){
    inquirer.prompt([

        {
            type: 'input',
            name:'title',
            message:'What is the title of your project?'
        },
        {
            type: 'input',
            name:'description',
            message:'Please write a description of your project?'
        },
        {
            type: 'input',
            name:'installation',
            message:'What are your installation instructions?'
        },
        {
            type: 'input',
            name:'usage',
            message:'What is this project used for?'
        },
        {
            type: 'list',
            name:'license',
            message:'Please select the license you would like to use.',
            choices: ['MIT License','Apache License','GPL General Public License']
        },
        {
            type: 'input',
            name:'contributors',
            message:'Please add any contributors to your project.'
        },
        {
            type: 'input',
            name:'testing',
            message:'Please provide testing instructions for your project.'
        },
        {
            type: 'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type: 'input',
            name:'username',
            message:'What is your GitHub username?'
        },
        {
            type: 'input',
            name:'repository',
            message:'What is the link to your GitHub repository?'
        },

    ]).then((input) => {
        // generate markdown for input
        const message = generateMarkdown(input)
        fs.writeFileSync('./output/readme.md', message, (err) => err? console.log(err): console.log(generateReadme));
        console.log(input)

    }).catch(function(){
        console.log('promise rejected')
    })
};
// call to initialize app
    const init = () => {
    promptUser()
    };

init();