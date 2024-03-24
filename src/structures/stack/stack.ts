import StackNode from '@/structures/stack/stack-node.ts'

export default class Stack<T> {
    private _top: StackNode<T>
    
    public constructor() {}
    
    public push(value: T): boolean {
        try {
            if(this._top == null) {
                this._top = new StackNode<T>(value, null)
            }else {
                let temp: StackNode<T> = new StackNode<T>(value, this._top)
                this._top = temp
            }

            return true
        }catch(err) {
            return false
        }
    }

    public pop(): T {
        try {
            let temp: T = this._top.value
            this._top = this._top.nextNode
            return temp
        }catch(err) {
            return null
        }
    }

    public get top(): StackNode<T> { return this._top }
    public set top(top: StackNode<T>) { this._top = top }
}
