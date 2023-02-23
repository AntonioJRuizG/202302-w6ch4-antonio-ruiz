/* eslint-disable @typescript-eslint/indent */
import http from 'http';
import * as dotenv from 'dotenv';
import { addCountry } from './countries';
dotenv.config();
// El server necesita dos parámetros: request y response
// Añadimo _ a req porque no la vamos a usar
// eslint-disable-next-line @typescript-eslint/naming-convention
const PORT = process.env.PORT || 4300;

const server = http.createServer((req, resp) => {
  // Aqui dentro va lo que queremos que haga el servidor
  console.log('Server', req.method, PORT);
  // Console.log(process.env); // Process permite acceder al hilo del proceso; env almacena en un objeto json

  switch (req.method) {
    case 'GET':
      // Gestion de errores. Esto lo hace todo node
      if (!req.url) {
        server.emit('error', new Error('Invalid URL'));
        return;
      }
      resp.write('Hello world');
      break;
    case 'PORT':
      addCountry({});
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

// server.on es como un addeventlistener
server.on('listening');

server.listen(PORT);
