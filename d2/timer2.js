const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);



// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key > 0 && key <= 9) {
    process.stdout.write("setting timer for" + key + "seconds...")
      setTimeout(()=>{process.stdout.write("timer over!");}, Number(key) * 1000)
  }
    else if (key === 'b') {
      process.stdout.write("beep")
  }
    else if (key === '\u0003') {
      process.stdout.write("Thanks for using me, ciao!")
      setTimeout(()=>{process.exit();}, 1000)
  }
}
)




    



    
