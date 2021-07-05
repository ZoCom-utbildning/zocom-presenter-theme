const {compile} = require('./lib')

compile({destinationDirectory:'docs', fileName:'zocom', verbose: false})
// sass.render(settings, (err, result) => {
//     if(!err){

//         let dir = fs.readdirSync('./');

//         if(dir.includes(OUTPUT_FOLDER)) {
//             fs.rmdirSync(OUTPUT_FOLDER, { recursive: true });
//             console.info(`${OUTPUT_FOLDER}-folder found, removing.`);
//         }

//         fs.mkdirSync(OUTPUT_FOLDER);
//         console.info(`${OUTPUT_FOLDER}-folder created.`);

//         fs.copySync(`./src/assets`, path.join(OUTPUT_FOLDER, 'assets'));
//         console.info(`assets-folder copied to ${OUTPUT_FOLDER}-folder.`);

//         fs.writeFile(path.join(OUTPUT_FOLDER,`${fileName}.css`), result.css, (error) => {
//             if(error) {
//                 console.error(error);
//             } else {
//                 console.info(`Files created and put into ${OUTPUT_FOLDER}-folder.`);
//             }
//         });
//       } else {
//           console.error(err)
//       }
// });
