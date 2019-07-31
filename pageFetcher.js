const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0]
const path = args[1]



function reqAndWrite(path, url){
    request(url, (error, response, body) => {
      console.log(error)
        fs.writeFile(path, body, (error)=>{
            if (error) throw error
            console.log("completed!!");
        })
    });
}

reqAndWrite(path, url);

