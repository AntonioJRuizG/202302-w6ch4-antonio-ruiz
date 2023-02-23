/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/indent */
export const calculator = (x: string | null, y: string | null) => [
  (Number(x) + Number(y)).toString(),
  (Number(x) - Number(y)).toString(),
  (Number(x) * Number(y)).toString(),
  (Number(x) / Number(y)).toString(),
];
