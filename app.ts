import { ExpressionFormat } from "@/formatter/expressionFormat.ts"
import { ExpressionParser } from "@/parser/expressionParse.ts"
import Stack from '@/structures/stack/stack'

let parsed: Stack<string> = ExpressionParser.expressionParse(
    ExpressionFormat.expressionBuild(
        ExpressionFormat.expressionRewrite('(2-5*4)')
    )
)

console.log(ExpressionParser.transpile('Vector', parsed))
