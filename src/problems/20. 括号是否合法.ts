import { runner } from "../common/utils";

function isValidBracket(string: string): boolean {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
            stack.push(string[i]);
        } else if (string[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            else stack.pop();
        } else if (string[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            else stack.pop();
        } else if (string[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            else stack.pop();
        }
    }
    return stack.length === 0 ? true : false;
}

runner(isValidBracket, '())', false);
