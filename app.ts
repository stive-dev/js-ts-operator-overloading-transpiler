import Stack from '@/structures/stack/stack.ts'

let stack: Stack<number> = new Stack<number>()
stack.push(2)
stack.push(4)

while(stack.top) {
    console.log(stack.pop())
}
