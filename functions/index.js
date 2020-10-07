const functions = require('firebase-functions');

const app = require('express')();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

const {
  getAllPosts,
  createPost,
} = require('./handlers/posts');
const {
  signup,
  login,
  changeEmail,
  logout,
  deleteAccount,
} = require('./handlers/users');

// Post routes
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, createPost);

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/changeEmail', changeEmail);
app.post('/logout', logout);
app.post('/delete', deleteAccount);

exports.api = functions.https.onRequest(app);