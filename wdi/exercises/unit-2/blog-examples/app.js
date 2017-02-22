let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let User = require('./models/user');
let BlogEntry = require('./models/blog-entry');
let Comment = require('./models/comment');

mongoose.connect('mongodb://localhost/blogs');

var db = mongoose.connection;
db.on('connected', function() {
  console.log('Mongoose connected to ' + db.host + ':' + db.port + '/' + db.name);
});

function quit() {
  console.log('Goodbye.');
  mongoose.disconnect();
}
// Delete comments before blog entries before users because 
// they're the most child heavy thing, think trees'

let user1 = null;
let user2 = 

Comment.remove({})
.then(function() {
  return BlogEntry.remove({});
})
.then(function() {
  return User.remove({});
})
.then(function() {
  let mike = new User( { name: 'Mike '} );
  return User.create(mike);
})
.then(function(savedUser) {
  console.log('just saved user:', savedUser);
  let blogEntry1 = new BlogEntry( {
    title: 'Monday',
    text: 'Happy',
    user: user1
  });
  let blogEntry2 = new BlogEntry( {
    title: 'Tuesday',
    text: 'Sad',
    user: user1
  });
  return BlogEntry.create([blogEntry1, blogEntry2]);
})
.then(function(savedBlogEntries) {
  console.log('savedBlogEntries:', savedBlogEntries);
  // create some comments and return a Promise
  let comment1 = new Comment( {
      text: 'So sorry!',
      user: savedUser,
      blogEntry: savedBlogEntries[0]
  });
  let comment2 = new Comment( {
      text: 'swag bro!',
      user: savedUser,
      blogEntry: savedBlogEntries[1]
  });
  return Comment.create([comment1], [comment2])
.then(function(savedComments) {

  return BlogEntry.find().populate('user');
})
.then(function(allBlogEntries) {
  // console.log('allBlogEntries:', allBlogEntries);
  allBlogEntries.forEach(function(entry) {
    console.log('On ' + entry.title + ' ' +
                entry.user.name + ' was ' + entry.text);
  });
  quit();
})
.catch(function(err) {
  console.log('ERROR:', err);
  quit();
});