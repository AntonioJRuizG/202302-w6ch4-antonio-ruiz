/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-floating-promises */
import fs from 'fs/promises';

fs.writeFile('sample.txt', 'Promesa de nueva linea de texto', {
  encoding: 'utf-8',
})
  .then(() => {
    return fs.readFile('sample.txt', { encoding: 'utf-8' });
  })
  .then((data) => {
    console.log(data);
  });
