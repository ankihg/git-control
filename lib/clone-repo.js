module.exports = (Git, repo, org) => {
  Git.Clone(`https://github.com/${org}/${repo}`, './tmp')
    .then(repo => {
      console.log('here is ur repo');
      return repo.getBranchCommit('master')
    })
}
