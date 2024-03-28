# Operator overloading for js and ts
Table of contents
- Information
- Supported operators
- Installation
- Syntax
  - Substraction operator 
- How to make it work
- Examples
## Information
Operator overloading is a transpiler that adds operator overloading support to
javascript and typescript.
## Supported Operators
| Operator | Overloading  |
|----------|--------------|
| +        | __add(a, b)  |
| -        | __diff(a, b) |
| *        | __mul(a, b)  |
| /        | __div(a, b)  |
## Installation
To install just downoad or clone the repository, then run `npm install` to install 
the dependencies and finally run `npm run build` to build the transpiler.
## Syntax
To overload an operator you have to create a class with the static methods that you want to overload.
```
class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static __add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y)
    }
}
```
To use the overload you have to write your expression inside the wrapper.
```
const vector1 = new Vector(2, 5)
const vector2 = new Vector(10, 20)

const result = __(vector1 + vector2) // wrapper = __()
```
## How to make it work
You need to use the `dist/trasnpiler.cjs` because it needs the dependencies.
To make it work you need the file with the script. For example index.js:
```
const result = __(vector1 + vector2) // wrapper = __()
```
And then in your shell run:
```
shell>dist/transpiler.cjs {wrapper} {className} {file}
```
- wrapper. It is your wrapper function.
- className. It iss your class with the overloaded methods.
- file. It is your file with overloads.
```
shell>dist/transpiler.cjs __() Vector index.js
```
Then it is transpiled to:
```
const result = Vector.__add(vector1, vector2) // wrapper = __()
```
### Substraction operator
The substraction operator. For example `v0 = v1 - v2` is different with `v0 = -v1 + v2`.
```
const result1 = __(vector1 - vector2)
const result1 = __(-vector1 + vector2)
```
It is transpiled to:
```
const result1 = Vector.__sub(vector1, vector2)
const result1 = Vector.__add(Vector.__sub(null, Vector1), vector2)
```
You can do this to differentiate them:
```
class Vector {
    __sub(a, b) {
        if(!a) {
            return new Vector(- b.x, - b.y)
        }
        
        return new Vector(a.x - b.x, a.y - b.y)
    }
}
```
## Examples
Overload with constants.
```
__add(a, b) {
    if(a.constructor.name == 'Vector' && b.constructor.name != 'Vector') {
        return new Vector(a.x * b, a.y * b)
    }else if(b.constructor.name == 'Vector' && a.constructor.name != 'Vector') {
        return new Vector(b.x * a, b.y * a)
    }else {
        return new Vector(a.x + b.x, a.y + b.y)
    }
}
```
