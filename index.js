const Git = require('nodegit');
const config = require('./config');

console.log('hi');
Git.Clone(config.repoUrl, './tmp')
  .then(repo => {
    console.log('here is ur repo');
    return repo.getBranchCommit('master')
  })
  .then(commit => {
    console.log('commited');
    console.log(commit);
  })
