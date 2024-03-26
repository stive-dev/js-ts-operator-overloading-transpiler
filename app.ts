import { ExpressionFormat } from "@/formatter/expressionFormat.ts"
import { ExpressionParser } from "@/parser/expressionParse.ts"
import Stack from '@/structures/stack/stack'

let parsed: Stack<string> = ExpressionParser.expressionParse(
    ExpressionFormat.expressionBuild(
        ExpressionFormat.expressionRewrite('(a+b/2)')
    )
)

while(parsed.top) {
    console.log(parsed.pop())
}
