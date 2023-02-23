import fs from 'fs/promises';

const newCountry = {
  name: 'Italia',
  capital: 'Milano',
};

export const addCountry = async (country: { [key: string]: string }) => {
  const stringDataInitial = await fs.readFile('data.json', {
    encoding = 'utf-8',
  });
  const data: { [key: string]: string }[] = JSON.parse(stringDataInitial);
  data.push(country);
  const stringData = JSON.stringify(country);
  // no se puede añadir country. hay que sobreescribir toda la informacion siempre
  fs.writeFile('data.json', country, { encoding = 'utf-8' });
};

addCountry(newCountry);

//Para actualizar un dato, traemos la informacion, esta va a venir en forma de objeto, por lo que se puede acceder a ella como a un objeto normal con js.
updateCountry({ name: 'Italia', capital: 'Roma' });
