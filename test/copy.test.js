const { Copy } = require("../lib");

const ali = {
  name: "Ali",
  age: 24,
  job: "developer"
}

describe("All Features of the Copy function", () => {
  test("Copying a simple non-nested obj", () => {
    let reza = Copy(ali)
    reza.name = "reza";
    expect(ali.name).toBe("Ali")
    expect(reza.name).toBe("reza")
  })

  test("Changing the attributes while copying", () => {
    let hamid = Copy(ali, { name: "hamid", age: 47 });
    expect(hamid.name).toBe("hamid")
    expect(hamid.age).toBe(47);
    expect(ali.name).toBe("Ali")
  })
})