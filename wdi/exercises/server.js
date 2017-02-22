const http = require('http')

const options = {
  host: 'whatthecommit.com',
  path: '/index.txt'
};

callback = function(response) {
  var randomGitMessage = '';

  response.on('data', function(chunk) {
    randomGitMessage += chunk
  });

  response.on('end', function () {
    console.log('Random Git Message:', randomGitMessage);
    console.log('we are there');
  })
}
console.log('Invoking an HTTP GET Request with url = http://' + options.host + options.path);
http.request(options, callback).end();
console.log('Are we there yet?');
console.log('Are we there yet?');
console.log('Are we there yet?');
