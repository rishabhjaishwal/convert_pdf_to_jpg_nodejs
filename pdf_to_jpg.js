const execCommand = require('child_process').exec;
const fs = require("fs");

/**
 * @description used for converting pdf to jpg image using imageMagick
 */
async function convertpdftojpeg() {
    try {
        let density = 150;
        let quality = 100;
        process.argv.forEach(arg => {
            if(arg.includes("dpi=")) {
                density = parseInt(arg.split("=")[1], 10);
            }
            if(arg.includes("quality=")) {
                quality = parseInt(arg.split("=")[1], 10);
            }
    });

    const dir = './output';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    const allFiles = fs.readdirSync('input');

    for(let i = 0; i < allFiles.length; i++) {
       let  promise = new Promise((resolve, rejects) => {
            let command = "convert -density " + density + " -trim ./input/" + allFiles[i] + " -quality "+ quality +" ./output/" + allFiles[i].split(".")[0] + ".jpg";
            execCommand(command, (err,stdout, stderr) => {
                if(err) {
                    rejects(err);
                }
                if(stderr) {
                    rejects(err);
                }
                resolve(stdout);
            })
        });
        await promise;
    }
    console.log("Hurrey!! Successfully converted")
    } catch (error) {
        console.log(error);
    }
    
}

(async () => {
    await convertpdftojpeg();
})();
