const sentence = "|/-\\|/-\\ ";
let sent = sentence.split('')
let number  = 100
for (const char of sent) {
  setTimeout(() => {process.stdout.write(`\r ${char}`)}, number)
  number += 200
}