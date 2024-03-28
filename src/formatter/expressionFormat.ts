export namespace ExpressionFormat {
    export function expressionRewrite(expression: string): string {
        return expression
            .replaceAll(/(?<=[^*])(?<=\s*)(?<=\w*)-(?=[^$])/g, '+ -')
            .replaceAll(' ', '')
    }
    
    export function expressionBuild(expression: string): string[] {
        expression = `(${expression})`
        let tempVariable: string = ''
        let generated: string[] = []
        
        for(let i: number = 0; i < expression.length; i++) {
            if(expression[i].match('\\w') || expression[i].match('\\.')) {
                tempVariable += expression[i]
            }else if(tempVariable.length != 0) {
                generated.push(tempVariable)
                tempVariable = ''
            }

            if(expression[i].match(/[+|*|\-|/|\\(|\\)]/g)) {
                generated.push(expression[i])
            }
        }

        return generated
    }
}
