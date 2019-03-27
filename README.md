## Developer Social Network App ##
 A full stack web application using React, Redux, MongoDB, Express and Node. A user is able to register, login, create a profile, edit a profile, view all profiles registered on the applicaton. A user can make posts, edit posts, and view other user's posts. As well as create, edit and delete their own comments.

## Steps to Install ##
### 1. clone the repo ### 
###  2. npm install on the server ### 
###  3. cd into client and npm install dependencies ### 
###  4. npm run dev -> runs server on port 5000 and client on port 3000  ### 
 ###  Create a keys_dev.js file ### 
 `module.exports = {
	mongoURI: process.env.MONGO_URI,
	secretOrKey: process.env.SECRET_OR_KEY
};`