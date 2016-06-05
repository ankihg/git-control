const Git =  require('nodegit')
const program =  require('commander');
const config = require('./config');

program
  .command('plz [request]')
  .description('help me')
  .action(request => {
    console.log(request);
  });

program
  .command('clone [repo] [org]')
  .description('clone specified org/repo to ./tmp')
  .action((repo, org, options) => {
    if (!repo) console.log('plz specify repo');
    else require('./lib/clone-repo')(Git, repo, org || config.org);
  })


program.parse(process.argv);
