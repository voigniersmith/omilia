const functions = require('firebase-functions');

const app = require('express')();
//const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');
db.settings({ ignoreUndefinedProperties: true })

const {
  getAllPosts,
  createPost,
  deletePost,
  editPost,
  getPost,
  createComment,
} = require('./handlers/posts');
const {
  signup,
  login,
  phoneLogin,
  logout,
  deleteAccount,
  changeEmail,
  changePassword,
  confirmEmail,
  searchUsers
} = require('./handlers/users');

// Post routes
app.get('/posts', getAllPosts);
//app.post('/post', FBAuth, createPost);
app.post('/post', createPost);
app.delete('/deletePost/:postID', deletePost);
app.post('/editPost', editPost);
app.get('/post/:postID', getPost);
//TODO: (gaurav)like a scream
//TODO: (gaurav)dislike a scream
app.post('/post/:postID/comment', createComment);

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/phoneLogin', phoneLogin);
app.post('/logout', logout);
app.post('/deleteAccount', deleteAccount);
app.post('/changeEmail', changeEmail);
app.post('/changePassword', changePassword);
app.get('/confirmEmail/:username', confirmEmail);
app.post('/searchUsers', searchUsers);

exports.api = functions.https.onRequest(app);