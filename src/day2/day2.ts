import { readFileSync } from 'fs';

const input = readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .slice(0, -1) // Remove final blank line
  .map((r) => r.split(' ').map((r) => parseInt(r)));

const part1 = () => {
  let count = 0;
  input.forEach((row) => {
    let d: undefined | 'inc' | 'dec';

    for (let i = 1; i <= row.length; i++) {
      const n1 = row[i],
        n2 = row[i - 1];

      if (i === 1) d = n1 > n2 ? 'inc' : 'dec';

      if (Math.abs(n1 - n2) > 3 || (d === 'inc' ? n1 <= n2 : n1 >= n2)) break;

      if (i === row.length) count++;
    }
  });
  console.log('Part 1: ' + count);
};

const part2 = () => {
  let count = 0;
  input.forEach((row) => {
    let d: undefined | 'inc' | 'dec',
      damp = false;

    for (let i = 1; i <= row.length; i++) {
      const n1 = row[i],
        n2 = row[i - 1];

      if (i === 1) d = n1 > n2 ? 'inc' : 'dec';

      if (Math.abs(n1 - n2) > 3 || (d === 'inc' ? n1 <= n2 : n1 >= n2))
        if (damp) break;
        else damp = true;

      if (i === row.length) count++;
    }
  });
  console.log('Part 2: ' + count);
};

part1();
part2();
