const { Copy } = require("../lib")

describe("It should copy an object successfully", () => {
  test("Copying a simple non-nested obj", () => {
    let ali = {
      name: "Ali",
      age: 23
    }

    let reza = Copy(ali)
    reza.name = "reza";
    expect(ali.name).toBe("Ali")
    expect(reza.name).toBe("reza")
  })
})