import { readFileSync } from 'fs';

const input = readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .slice(0, -1) // Remove final blank line
  .map((r) => r.split(' ').map((r) => parseInt(r)));

const part1 = () => {
  let count = 0;

  input.forEach((row) => {
    let dirr: undefined | 'increase' | 'decrease' = undefined;
    for (let i = 1; i <= row.length; i++) {
      if (i === 1) {
        dirr = row[i] > row[i - 1] ? 'increase' : 'decrease';
      }

      if (
        dirr != undefined &&
        (Math.abs(row[i] - row[i - 1]) > 3 ||
          (dirr === 'increase' ? row[i] <= row[i - 1] : row[i] >= row[i - 1]))
      ) {
        break;
      }

      if (i === row.length) {
        count++;
      }
    }
  });
  console.log('Part 1: ' + count);
};

const part2 = () => {
  let count = 0;

  input.forEach((row) => {
    let dirr: undefined | 'increase' | 'decrease' = undefined;
    let damped = false;
    for (let i = 1; i <= row.length; i++) {
      if (i === 1) {
        dirr = row[i] > row[i - 1] ? 'increase' : 'decrease';
      }

      if (
        dirr != undefined &&
        (Math.abs(row[i] - row[i - 1]) > 3 ||
          (dirr === 'increase' ? row[i] <= row[i - 1] : row[i] >= row[i - 1]))
      ) {
        if (damped) {
          break;
        } else {
          damped = true;
        }
      }

      if (i === row.length) {
        count++;
      }
    }
  });
  console.log('Part 2: ' + count);
};

part1();
part2();
