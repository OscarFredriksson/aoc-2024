import { readFileSync } from 'fs';

const [list1, list2] = readFileSync(__dirname + '/input.txt', 'utf-8')
  .split('\n')
  .slice(0, -1) // Remove final blank line
  .map((r) => r.split('   ').map((r) => parseInt(r)))
  .reduce(
    (prev, row) => {
      prev[0].push(row[0]);
      prev[1].push(row[1]);
      return prev;
    },
    [[] as number[], [] as number[]]
  );

const part1 = () => {
  let total = 0;

  const sortedList2 = list2.sort();

  list1.sort().forEach((n1, i) => (total += Math.abs(n1 - sortedList2[i])));

  console.log('Part1: total distance: ' + total);
};

const part2 = () => {
  let total = 0;

  list1.forEach((n1) => (total += n1 * list2.filter((n2) => n1 === n2).length));

  console.log('Part2: similarity score: ' + total);
};

part1();
part2();
