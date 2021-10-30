const _ = require("lodash");

const mas = [2, [(4, [6, 2, [5]])]];
console.log(_.flattenDeep(mas));
