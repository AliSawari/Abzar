# Abzar :construction_worker_man: :hammer_and_wrench:
[![Node.js CI](https://github.com/AliSawari/Abzar/actions/workflows/node.js.yml/badge.svg)](https://github.com/AliSawari/Abzar/actions/workflows/node.js.yml)
[![npm](https://img.shields.io/npm/v/abzar)](https://www.npmjs.com/package/abzar)

**My Own mini Utils that I use in order to stop re-writing repetetive code**

_Abzar ابزار means Utils in Persian_ 

## install

`yarn add abzar`

or

`npm i abzar --save`

**IMPORTANT NOTE**: I'm still writing the core libraries, some libs are still unfinished.

## Use
**a few examples here:**

**'Copy'** creates a new object from another object, so changing the copy object 
wont change the original one
```js
import { Copy } from 'abzar'

var john = {
  name: 'john',
  age: 20
}

var jane = Copy(john)
jane.name = 'jane'
console.log(jane.name) // outputs jane
console.log(john.name) //outputs john
```

NOTE: alternatively, you can specify the data which you want to change 

```js
var jane = Copy(john, {
  name: 'jane'
})
```

**'Exclude'** is a function which removes the specified properties.
write the names of the properties you want to exclude inside an array.

```js
import {Exclude} from 'abzar'

var myData = {
  name: 'john',
  lastName: 'doe',
  facebook_username: 'john_doe',
  facebook_password: 'johndoe123'
}

var securedData = Exclude(myData, ['facebook_password'])

console.log(securedData) // outputs:
// {
//  name: 'john',
//  lastName: 'doe',
//  facebook_username: 'john_doe',
// }
```


## License

MIT License

Copyright (c) 2018 Ali Sawari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


