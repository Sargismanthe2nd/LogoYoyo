const inquirer = require('inquirer');

const questions = [
  { type: 'input', name: 'tag', message: 'Enter three letter initials:' },
  { type: 'input', name: 'textColour', message: 'Enter text colour:' },
  { type: 'list', name: 'shape', message: 'Which shape would you like?', choices: ['Square', 'Circle', 'Triangle'] },
  { type: 'input', name: 'shapeColour', message: 'Enter a colour for the shape:' },
]

async function userPrompt() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log('Generating logo...');
    return answers;
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = userPrompt;
