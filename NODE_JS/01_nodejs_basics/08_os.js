const os = require("os");

console.log("===== SYSTEM INFORMATION =====");

console.log("OS:", os.platform());
console.log("Hostname:", os.hostname());
console.log("Architecture:", os.arch());

console.log("CPU:", os.cpus()[0].model);
console.log("CPU Cores:", os.cpus().length);

console.log(
    "Total RAM:",
    (os.totalmem() / 1024 ** 3).toFixed(2),
    "GB"
);

console.log(
    "Free RAM:",
    (os.freemem() / 1024 ** 3).toFixed(2),
    "GB"
);

console.log(
    "Uptime:",
    (os.uptime() / 3600).toFixed(2),
    "hours"
);