export default class StackNode<T> {
    private _value: T
    private _nextNode: StackNode<T>

    public constructor(_value: T, _nextNode: StackNode<T>) {
        this._value = _value
        this._nextNode = _nextNode
    }

    public get value(): T { return this._value }
    public set value(value: T) { this._value = value }

    public get nextNode(): StackNode<T> { return this._nextNode }
    public set nextNode(nextNode: StackNode<T>) { this._nextNode = nextNode }
}
