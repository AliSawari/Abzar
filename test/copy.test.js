const {Copy} = require('./../')

describe("-- Copy.js Tests --", () => {

  it('Should create a copy from another object', () => {
    let john = {
      name: 'john',
      age: 20
    }
    let jane = Copy(john)
    expect(jane).toEqual(john)
  })

  it('Should create a copy and modifies it', () => {
    let john = {
      name: 'john',
      age: 20
    }
    let jane = Copy(john, {name: 'jane',age:18})
    let jane2 = {
      name: 'jane',
      age: 18
    }
    expect(jane).not.toBe(john)
    expect(jane).toEqual(jane2)
  })
})