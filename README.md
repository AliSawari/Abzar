# Ali-Utils :construction_worker_man: :hammer_and_wrench: 

**My Own mini Utils that I use in order to stop re-writing repetetive code**

## install

`yarn add ali-utils`

or

`npm i ali-utils --save`

## Use
**a few examples here:**

'Copy' creates a new object from another object, so changing the copy object 
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