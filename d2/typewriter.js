const sentence = "hello there from lighthouse labs";
let sent = sentence.split('')
let number  = 0
for (const char of sent) {
  setTimeout(() => {process.stdout.write(char)}, number)
  number += 50
}

