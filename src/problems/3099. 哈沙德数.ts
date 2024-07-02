import { runner } from '../common/utils';

function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const sum = ((x / 100) >> 0) + (((x % 100) / 10) >> 0) + (((x % 10) / 1) >> 0);
  return x % sum === 0 ? sum : -1;
}
runner(sumOfTheDigitsOfHarshadNumber, 18);
