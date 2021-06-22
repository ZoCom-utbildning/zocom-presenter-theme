const fs = require('fs-extra');
const sass = require('sass');

const fileName = 'zocom';

const settings = {
    file: `./src/${fileName}.scss`,
    outFile: `./dist/${fileName}.css`
}

sass.render(settings, (err, result) => {
    if(!err){

        let dir = fs.readdirSync('./');

        if(dir.includes(`dist`)) {
            fs.rmdirSync(`./dist`, { recursive: true });
            console.info('dist-folder found, removing.');
        }

        fs.mkdirSync(`./dist`);
        console.info('dist-folder created.');

        fs.copySync(`./src/assets`, `./dist/assets`);
        console.info('assets-folder copied to dist-folder.');

        fs.writeFile(`./dist/${fileName}.css`, result.css, (error) => {
            if(error) {
                console.error(error);
            } else {
                console.info('Files created and put into dist-folder.');
            }
        });
      } else {
          console.error(err)
      }
});
