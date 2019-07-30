

const period = process.argv.slice(2).map(x => Number(x));

for(let i = 0; i < period.length; i++) {
  if(period[i] >= 0) {
    setTimeout(()=>{console.log("sound");}, period[i] * 1000)
   }
}