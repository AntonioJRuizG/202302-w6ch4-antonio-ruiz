/* eslint-disable @typescript-eslint/object-curly-spacing */
import { program } from 'commander';
import { inquirer } from 'inquirer';

import { version } from 'os';

program.option('--install').option('-v, --version');
program.parse();
const options = program.opts();

if (options.version) {
	console.log('version 1');
}

console.log('hello');

inquirer
	.prompt([
		{
			// Funcion con las preguntas que queremos que haga la interfaz
			name: 'UserName', // Pregunta 1
			message: 'Dime tu nombre', // Pregunta 2
			type: 'input', // Prgunta 3..
		},
	])
	.then((answers) => {
		console.log('hola', answers.UserName);
	});

// A parte del prompt tenemos list, checkbox, los más habituales
