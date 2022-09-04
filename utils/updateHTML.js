const fs = require('fs');
const path = require('path');

const generateHTML_URL = (pathname) => {
    return "https://321paranoiawhy.github.io/ExquisiteUI/" + pathname.replace(/\\/g, '/');
};


const write2md = () => {

};

fs.writeFile('./docs/test.md', '', () => { });

const travelSync = (dir, callback) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach((file) => {
                var pathname = path.join(dir, file);
                fs.stat(pathname, (err, stats) => {
                    if (err) {
                        console.log(err);
                    } else if (stats.isDirectory()) {
                        travelSync(pathname, callback);
                    } else {
                        if (stats.isFile() && path.extname(pathname) === '.html') {
                            fs.appendFile('./docs/test.md', generateHTML_URL(pathname) + '\n', (err) => { console.log(err); });
                            console.log(generateHTML_URL(pathname));
                        }
                        // callback(pathname);
                    }
                })
            })
        }
    });
};

travelSync('./components', () => { });

// fs.readFile('./components/Button/button.css', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });