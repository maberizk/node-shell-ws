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

  if (cmd === "ls") {
    const fs = require('fs');
    // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('prompt > ');
      }
    });
  }
  ///////
  // process.stdout.write("\nprompt > ");
});