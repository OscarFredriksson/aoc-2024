import { readFileSync } from 'fs';

const input = readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .slice(0, -1) // Remove final blank line
  .map((r) => r.split(''));

const part1 = () => {
  let sum = 0;
  const SEARCH_STR = 'XMAS';
  input.forEach((row, i) => {
    row.forEach((_, j) => {
      // Forwards
      if (j < row.length - 3 && row.join('').substring(j, j + 4) === SEARCH_STR)
        sum++;

      // Backwards
      if (
        j > 2 &&
        row.join('').substring(j - 3, j + 1) ===
          SEARCH_STR.split('').reverse().join('')
      )
        sum++;

      // Down
      if (i < row.length - 3) {
        for (let k = 0; k < SEARCH_STR.length; k++) {
          if (input[i + k][j] !== SEARCH_STR[k]) break;
          if (k === SEARCH_STR.length - 1) sum++;
        }
      }
      // Up
      if (i > 2) {
        for (let k = 0; k < SEARCH_STR.length; k++) {
          if (input[i - k][j] !== SEARCH_STR[k]) break;
          if (k === SEARCH_STR.length - 1) sum++;
        }
      }

      // Diagonal down right
      if (j < row.length - 3 && i < input.length - 3) {
        for (let k = 0; k < SEARCH_STR.length; k++) {
          if (input[i + k][j + k] !== SEARCH_STR[k]) break;
          if (k === SEARCH_STR.length - 1) sum++;
        }
      }

      // Diagonal down left
      if (j > 2 && i < input.length - 3) {
        for (let k = 0; k < SEARCH_STR.length; k++) {
          if (input[i + k][j - k] !== SEARCH_STR[k]) break;
          if (k === SEARCH_STR.length - 1) sum++;
        }
      }

      // Diagonal up left
      if (j > 2 && i > 2) {
        for (let k = 0; k < SEARCH_STR.length; k++) {
          if (input[i - k][j - k] !== SEARCH_STR[k]) break;
          if (k === SEARCH_STR.length - 1) sum++;
        }
      }

      // Diagonal up right
      if (j < row.length - 3 && i > 2) {
        for (let k = 0; k < SEARCH_STR.length; k++) {
          if (input[i - k][j + k] !== SEARCH_STR[k]) break;
          if (k === SEARCH_STR.length - 1) sum++;
        }
      }
    });
  });

  console.log('Part1 sum: ' + sum);
};

const part2 = () => {
  let sum = 0;
  for (let i = 1; i < input.length - 1; i++)
    for (let j = 1; j < input[i].length - 1; j++)
      if (
        [
          `${input[i - 1][j - 1]}${input[i][j]}${input[i + 1][j + 1]}`,
          `${input[i + 1][j - 1]}${input[i][j]}${input[i - 1][j + 1]}`,
        ].every((s) => ['MAS', 'SAM'].includes(s))
      )
        sum++;

  console.log('Part2 sum: ' + sum);
};

part1();
part2();
