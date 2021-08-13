var phantomjs = require('phantomjs-prebuilt')
var program = phantomjs.exec('phantomjs-script.js', 'https://google.com')
program.stdout.pipe(process.stdout)
program.stderr.pipe(process.stderr)
program.on('exit', code => {
  console.log('\nSee you!\n')
})