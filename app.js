const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type:'input',
      name:'name',
      message:'What is your name?'
    }
  ])
  .then(answers => console.log(answers));


// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github)

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio is complete! Check out index.html to see the output');
// });



// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;


//const printProfileData = profileDataArr => {
  // This...
 // for (let i = 0; i < profileDataArr.length; i += 1) {
   // console.log(profileDataArr[i]);
  //}

  //console.log('================');

  // Is the same as this...
  //profileDataArr.forEach(profileItem => console.log(profileItem));
//};

//printProfileData(profileDataArgs);

//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//  `;
// };
// console.log(generatePage ('Amina', 'aminahub'));

// const generatePage = (username, githubName) => {
//   return `
//   Name: ${username} 
//   Github: ${githubName}
//   `;
// };




// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('portfolio complete, checkout index.html to see the outcome');
// });