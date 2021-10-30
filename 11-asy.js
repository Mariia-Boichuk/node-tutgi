const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (erro, data) => {
  if (erro) {
    console.log("er", erro);
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("er", err);
      return;
    }
    const second = data;
    writeFile(
      "./content/resasync.txt",
      `hello ASYNCSOC FILE ${first} 8 ${second}`,
      (err, res) => {
        if (err) {
          console.log("er", err);
          return;
        }
        console.log(res);
      }
    );
  });
});
