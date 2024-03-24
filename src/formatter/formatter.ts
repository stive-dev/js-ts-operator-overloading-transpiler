export namespace Formatter {
    export function rewrite(expression: string): string {
        return expression
            .replaceAll(/(?<=[^*])(?<=\s*)(?<=\w*)-(?=[^$])/g, '+ -')
    }
    
    export function build(expression: string): string[] {
        expression = `(${expression})`
        let tempVariable: string = ''
        let tempOperator: string = ''
        let generated: string[] = []

        for(let i: number = 0; i < 10; i++) {
            if(expression[i].match('\\w')) {
                tempVariable += expression[i]
            }else if(tempVariable.length != 0) {
                generated.push(tempVariable)
                tempVariable = ''
            }

            if(expression[i].match('[+|*|/|\\(|\\)]')) {

            }
        }

        console.log(generated)
        return generated
    }

}
