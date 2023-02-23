/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/indent */
import http from 'http';
import url from 'url';
import { calculator } from './calculator.js';

const PORT = process.env.PORT || 4300;

const server = http.createServer((req, resp) => {
  console.log('Server', req.method, PORT);

  switch (req.method) {
    case 'GET':
      if (!req.url) {
        server.emit('error', new Error('Error 404'));
        resp.write(
          `<html>
            <h3>Error 404</h3>
          </html>`
        );
        return;
      }

      const { pathname, search } = url.parse(req.url);

      if (pathname !== '/calculator') {
        server.emit('error', new Error('Invalid URL'));
        resp.write(`
        <html>
          <h3>error 404</h3>
        </html>`);
        return;
      }

      if (pathname === '/calculator') {
        const urlParams = new URLSearchParams(search!);
        const num1 = urlParams.get('a');
        const num2 = urlParams.get('b');
        console.log(num1);
        console.log(typeof num1);
        console.log(typeof num2);
        if (
          isNaN(Number(num1)) ||
          isNaN(Number(num2)) ||
          num1 === '' ||
          num2 === ''
        ) {
          server.emit('error', new Error('Error 404'));
          resp.write(`
          <html lang="en">
            <h3>Error 404</h3>
          </html>`);
        } else {
          console.log(num1, num2);
          console.log(calculator(num1, num2));
          const result = calculator(num1, num2);
          resp.write(
            `<html>
            <section class="calculatorcontainer">
              <h3>Resultados</h3>
                <ul>
                  <li>${num1}+${num2}= ${result[0]}</li>
                  <li>${num1}-${num2}= ${result[1]}</li>
                  <li>${num1}*${num2}= ${result[2]}</li>
                  <li>${num1}/${num2}= ${result[3]}</li>
                </ul>
            </section>
          </html>`
          );
        }
      }

      break;
    case 'PORT':
      break;
    case 'PATCH':
    case 'DELETE':
      resp.write('Hello world, metodo no implementado' + req.method);
      break;
    default:
      resp.write('Hello world, metodo desconocido');
      break;
  }

  resp.end();
});

server.on('error', () => {});

server.on('listening', () => {
  console.log('Listening in http://localhost:' + PORT);
});

server.listen(PORT);
