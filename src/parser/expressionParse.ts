import Stack from "@/structures/stack/stack.ts"

export namespace ExpressionParser {
    const operators: object = {
        '+': 1,
        '*': 2,
        '/': 2
    }
    
    export function expressionParse(expression: string[]): Stack<string> {
        let parsedExpression: Stack<string> = new Stack<string>()
        let operatorStack: Stack<string> = new Stack<string>()

        for(let i: number = 0; i < expression.length; i++) {

            if(expression[i].match('\\(')) {
                operatorStack.push(expression[i])
            }

            if(expression[i].match('[+|*|/]')) {
                if(operatorStack.top) {
                    if(operators[operatorStack.top.value] >= operators[expression[i]]) {
                        parsedExpression.push(operatorStack.pop())
                        operatorStack.push(expression[i])
                    }else {
                        operatorStack.push(expression[i])
                    }
                }
            }

            if(expression[i].match('\\w')) {
                parsedExpression.push(expression[i])
            }

            if(expression[i].match('\\)')) {
                while(operatorStack.top) {
                    if(operatorStack.top.value.match('\\(')) {
                        operatorStack.pop()
                        break
                    }

                    parsedExpression.push(operatorStack.pop())
                }
            }
            
        }

        return parsedExpression
    }
}
