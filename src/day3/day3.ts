import { readFileSync } from 'fs';

const input = readFileSync(__dirname + '/input.txt', 'utf-8');

const day1 = () => {
  let sum = 0;
  for (let i = 0; i < input.length; ) {
    i = input.indexOf('mul(', i);
    if (i === -1) break;
    i += 4;
    const containsn1 = input.substring(i, i + 4);
    const commaIndex = containsn1.indexOf(',');
    i += commaIndex + 1;
    const n1 = parseInt(containsn1.substring(0, commaIndex));
    const containsn2 = input.substring(i, i + 4);
    const closingParentheisIndex = containsn2.indexOf(')');
    i += closingParentheisIndex + 1;
    const n2 = parseInt(containsn2.substring(0));

    if (closingParentheisIndex > 0) sum += n1 * n2;
  }

  console.log('Part 1 sum: ' + sum);
};

const day2 = () => {
  let sum = 0;
  let skip = false;
  for (let i = 0; i < input.length; ) {
    if (skip) {
      i = input.indexOf('do()', i);
      if (i !== -1) {
        i += 4;
        skip = false;
      }
    }

    const dontIndex = input.indexOf("don't()", i);
    const mulIndex = input.indexOf('mul(', i);

    if (dontIndex !== -1 && dontIndex < mulIndex) {
      skip = true;
      i = dontIndex + 7;
      continue;
    }
    if (mulIndex === -1) break;
    i = mulIndex + 4;
    const containsn1 = input.substring(i, i + 4);
    const commaIndex = containsn1.indexOf(',');
    i += commaIndex + 1;
    const n1 = parseInt(containsn1.substring(0, commaIndex));
    const containsn2 = input.substring(i, i + 4);
    const closingParentheisIndex = containsn2.indexOf(')');
    i += closingParentheisIndex + 1;
    const n2 = parseInt(containsn2.substring(0));

    if (closingParentheisIndex > 0) sum += n1 * n2;
  }

  console.log('Part 2 sum: ' + sum);
};

day1();
day2();
