const osmy = require("os");
const user = osmy.userInfo();
console.log(user);
console.log(`uptime is ${osmy.uptime()}`);

const data = {
  type: osmy.type(),
  release: osmy.release(),
  totalmem: osmy.totalmem(),
  free: osmy.freemem(),
};
console.log(data);
