const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subFolder", "text.txt");
console.log("filePath: ", filePath);

const base = path.basename(filePath);
console.log("base: ", base);

const absolue = path.resolve(__dirname, "/content", "subFolder", "text.txt");
console.log("absolue: ", absolue);
