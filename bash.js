process.stdout.write("prompt > ");

const ls = require('./ls')
const pwd = require('./pwd')
process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  }
  else if(cmd === "ls") {
   ls();
  }
   else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
