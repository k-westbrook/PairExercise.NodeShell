process.stdout.write("prompt > ");

const ls = require('./ls')
const pwd = require('./pwd')
const cat = require('./cat')
process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  }
  else if (cmd === "ls") {
    ls();
  }
  else if (cmd.split(' ')[0] === 'cat') {

    cat(cmd.split(' ')[1]);

  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
