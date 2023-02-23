/* eslint-disable @typescript-eslint/object-curly-spacing */
import fs from 'fs';

const data = fs.readFileSync('sample.txt', { encoding: 'utf-8' });
console.log(data);

fs.readFile('sample.txt', { encoding: 'utf-8' }, (error, data) => {
  console.log('Async');
  console.log(data);
});

// Esto devuelve por consola 'nueva linea'. Cuidado, esto sobreescribe los datos de sample.txt
// como es sincrono se ejecuta primero. y a continuacion entra desde el bucle de asincronia el readFile, que es asincrono
fs.writeFileSync('sample.txt', 'nueva linea', { encoding: 'utf-8' });

// Para añadir cosas se usa append
fs.appendFile('sample.txt', '\nlinea añadida', { encoding: 'utf-8' }, () => {
  fs.readFile('sample.txt', { encoding: 'utf-8' }, (error, data) => {
    console.log('Async');
    console.log(data);
  });
});
