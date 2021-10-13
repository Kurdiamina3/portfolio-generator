const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve ({
      ok: true,
      message: 'File Created!'
      });
    });
  });
};

const copyFile = () => {
  return new Promise ((resolve,reject) => {
    fs.copyFile('../app.js', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve ({
        ok: true,
        message: 'Copy was successful!'
      })
    })
  })
}

module.exports = { writeFile, copyFile };

