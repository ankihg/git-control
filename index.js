const Git = require('nodegit');
const config = require('./config');

console.log('hi');
Git.Clone(config.repoUrl, './tmp')
  .then(repo => {
    console.log('gren commit');
    return repo.getCommit('1b2d65e')
  })
  .then(commit => {
    console.log('get enry');
    return commit.getEntry('README.md');
  })
  .then(readme => {
    console.log('hi');
    console.log(readme);
  });
