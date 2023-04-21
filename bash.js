//Output a prompt
const process = require('process');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
if (cmd === "cwd") {
    console.log("Current working directory: ",
          process.cwd());
    
} else {
  process.stdout.write('You typed: ' + cmd);
}
  process.stdout.write('\nprompt > ');
});

 
