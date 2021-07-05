const fs = require('fs-extra');
const sass = require('sass');
const path = require('path')

module.exports = {
  compile({destinationDirectory, fileName, verbose=false}){
    const settings = {
        file: path.join(`./src/`, `${fileName}.scss`),
        outFile: path.join(destinationDirectory, `${fileName}.css`)
    }
    sass.render(settings, (err, result) => {
      if(!err){
        
        let dir = fs.readdirSync(__dirname);
        
        // if(dir.includes(destinationDirectory)) {
        //   fs.rmdirSync(destinationDirectory, { recursive: true });
          
        //   if(verbose)console.info(`${destinationDirectory}-folder found, removing.`);
        // }
        if(!dir.includes(destinationDirectory))
          {fs.mkdirSync(destinationDirectory);}
        
        if(verbose)console.info(`${destinationDirectory}-folder created.`);
        
        fs.copySync(`./src/assets`, path.join(destinationDirectory, 'assets'));
        
        if(verbose)console.info(`assets-folder copied to ${destinationDirectory}-folder.`);
        
        fs.writeFile(path.join(destinationDirectory,`${fileName}.css`), result.css, (error) => {
          if(error) {
            console.error(error);
          } else {
            if(verbose)console.info(`Files created and put into ${destinationDirectory}-folder.`);
          }
        });
      }
    })
  }
}