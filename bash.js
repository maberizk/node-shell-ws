// /Output a prompt
process.stdout.write("prompt > ");
// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  process.stdout.write("You typed: " + cmd + "\n");
  ///////PWD FILE
  let pwd = require("./pwd");
  if (cmd === "pwd") {
    pwd();
  }

  let ls = require("./ls")
  if (cmd === "ls") {
   ls()
  }
  ///////
  // process.stdout.write("\nprompt > ");
});