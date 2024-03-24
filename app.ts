import Stack from '@/structures/stack/stack.ts'
import { Formatter } from '@/formatter/formatter.ts'

let stack: Stack<number> = new Stack<number>()
stack.push(2)
stack.push(4)

while(stack.top) {
    console.log(stack.pop())
}

console.log(Formatter.rewrite("a1+ a2 -4 * (4 +6.6)"))

function doshit(expression) {
    let tempVariable: string = ''
    let tempOperator: string = ''
    let generated: string[] = []
    let last: string = ''
    let next: string = ''

    for(let i: number; i < expression.length; i++) {
        if(expression[i].match('\\w')) {
            tempVariable += expression[i]
        }else if(tempVariable.length != 0) {
            generated.push(tempVariable)
            tempVariable = ''
        }
    }
}



// a1 + a2 - (4 + 6) = a1 + a2 * -1 * (4 + 6)
// a1 + a2 - (4 + 6) = a1 + a2 + -1 * (4 + 6)
//console.log("a1+ a2 * -(4 +6) + 2 * -(4 +6 - 10)".replaceAll('-', '-1 * '))
// console.log("a1 + a2 * - 4") // case 1 doesnt change
// console.log("a1 + a2 - 4".replaceAll('-', ' + - ')) // case 2
// console.log("a1 + a2 - (2 + 6) - 6".replaceAll(/-(?=.*\s)(?=.*\()/g, '* - 1 *')) // case 3
// console.log("a1 + a2 - (2 + 6) - 6".replaceAll(/-(?=.*\s)(?=.*\()/g, '* - 1 *').replaceAll('-', ' + - '))
console.log('a1 + a2 * -1 * a4')
// si no tiene * delante entonces agregar +
