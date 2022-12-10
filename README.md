# Ali-Utils :construction_worker_man: :hammer_and_wrench:
[![Build Status](https://travis-ci.org/AliSawari/Ali-Utils.svg?branch=master)](https://travis-ci.org/AliSawari/Ali-Utils)
[![version](https://badgen.net/npm/v/ali-utils)](https://www.npmjs.com/package/ali-utils)
[![npm](https://img.shields.io/npm/dt/ali-utils.svg)](https://www.npmjs.com/package/ali-utils)

**My Own mini Utils that I use in order to stop re-writing repetetive code**

## install

`yarn add ali-utils`

or

`npm i ali-utils --save`

**IMPORTANT NOTE**: I'm still writing the core libraries, some libs are still unfinished.

## Use
**a few examples here:**

**'Copy'** creates a new object from another object, so changing the copy object 
wont change the origin one
```js
import {Copy} from 'ali-utils'

var john = {
  name: 'john',
  age: 20
}

var jane = Copy(john)
jane.name = 'jane'
console.log(jane)
console.log(john)
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
import {Exclude} from 'ali-utils'

var myData = {
  name: 'john',
  lastName: 'doe',
  facebook_username: 'john_doe',
  facebook_password: 'johndoe123'
}

var securedData = Exclude(myData, ['facebook_password'])

console.log(securedData)
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
