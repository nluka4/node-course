const fs = require("fs");
const { join } = require("path");

const filePath = join("input.txt");

fs.readFile(filePath, "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }

  const text = res;

  fs.writeFile("./output.txt", text, (err) => {
    if (err) throw err;
  });
});
