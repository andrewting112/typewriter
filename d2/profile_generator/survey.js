const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name?', (answer1) => {
  rl.question('what activity do you like doing?', (answer2) => {
    rl.question('what do you listen to while doing that?', (answer3) => {
      console.log(`${answer1} loves listening to ${answer3} while ${answer2}`);
      rl.close()
    })
  })
});

