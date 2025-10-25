const os = require("os");

const myPc = {
  cpuArchitecture: os.arch(),
  osConstants: os.constants,
  cpus: os.cpus,
};

console.log(myPc);
