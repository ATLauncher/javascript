const fs = require('fs');
const path = require('path');

const commonFiles = [
    '.editorconfig',
    'LICENSE',
    '.nvmrc'
];

fs.readdir('./packages', (err, packages) => {
    packages.forEach((packageName) => {
        const dir = path.resolve(`packages/${packageName}`);

        commonFiles.forEach((file) => {
            const filePath = path.resolve(file);

            const finalFilePath = path.resolve(`${dir}/${file}`);

            console.log(`Copying ${filePath} to ${finalFilePath}`);

            if (fs.existsSync(finalFilePath)) {
                fs.unlinkSync(finalFilePath);
            }

            fs.createReadStream(filePath).pipe(fs.createWriteStream(finalFilePath));
        });
    });
});