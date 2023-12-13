const os = require("os");

//info about current user

const user = os.userInfo();
console.log("user: ", user);

//method returs system uptime

console.log(os.uptime(), "uptime");

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log("currentOs: ", currentOs);
