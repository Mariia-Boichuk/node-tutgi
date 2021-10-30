const path = require("path");
console.log(path.sep);
fole = path.join("content//", "/subfolder/", "text.txt");
console.log(path.basename(fole));
console.log(path.resolve(__dirname, "content", "subfolder", "text.txt"));
