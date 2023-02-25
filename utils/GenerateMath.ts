import { OperatorsI } from "./../types/OperatorsI";
import { MathI } from "./../types/MathI";

export function GenerateMath(level: number, operators: OperatorsI[]): MathI {
  const number1 = generateNumber(level);
  const number2 = generateNumber(level);
  const score = Math.round(level * 10 * Math.random());
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const stringRes = `${number1} ${operator} ${number2} = ?`;
  switch (operator) {
    case "*": {
      const result = number1 * number2;
      if (result % 1 !== 0 || result < 0) {
        return GenerateMath(level, operators);
      }
      return { equation: stringRes, result, score };
    }
    case "-": {
      const result = number1 - number2;
      if (result % 1 !== 0 || result < 0) {
        return GenerateMath(level, operators);
      }
      return { equation: stringRes, result, score };
    }
    case "/": {
      const result = number1 / number2;
      if (result % 1 !== 0 || result < 0) {
        return GenerateMath(level, operators);
      }
      return { equation: stringRes, result, score };
    }
    default: {
      const result = number1 + number2;
      if (result % 1 !== 0 || result < 0) {
        return GenerateMath(level, operators);
      }
      return { equation: stringRes, result, score };
    }
  }
}

function generateNumber(level: number): number {
  const res = [];
  for (let i = 0; i < level; i++) {
    res.push(Math.round(Math.random() * 9));
  }
  return +res.join("");
}
