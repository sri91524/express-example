/**
    GET / 
    GET /api
    GET /api/users
    POST /api/users
    GET /api/users/:id
    PATCH /api/users/:id
    DELETE /api/users/:id
    GET /api/posts
    POST /api/posts
    GET /api/posts/:id
    PATCH /api/posts/:id
    DELETE /api/posts/:id
 */
/**
    GET /api/users/:id/posts
    Retrieves all posts by a user with the specified id.
    GET /api/posts?userId=<VALUE>
    Retrieves all posts by a user with the specified postId.
    It is common for APIs to have multiple endpoints that accomplish the same task. This route uses a "userId" query parameter to filter posts, while the one above uses a route parameter.
    GET /comments
    Note that we do not have any comments data yet; that is okay! Make sure that you create a place to store comments, but you do not need to populate that data.
    POST /comments
    When creating a new comment object, it should have the following fields:
    id: a unique identifier.
    userId: the id of the user that created the comment.
    postId: the id of the post the comment was made on.
    body: the text of the comment.
    GET /comments/:id
    Retrieves the comment with the specified id.
    PATCH /comments/:id
    Used to update a comment with the specified id with a new body.
    DELETE /comments/:id
    Used to delete a comment with the specified id.
    GET /comments?userId=<VALUE>
    Retrieves comments by the user with the specified userId.
    GET /comments?postId=<VALUE>
    Retrieves comments made on the post with the specified postId.
    GET /posts/:id/comments
    Retrieves all comments made on the post with the specified id.
    GET /users/:id/comments
    Retrieves comments made by the user with the specified id.
    GET /posts/:id/comments?userId=<VALUE>
    Retrieves all comments made on the post with the specified id by a user with the specified userId.
    GET /users/:id/comments?postId=<VALUE>
    Retrieves comments made by the user with the specified id on the post with the specified postId.
 */
//========================================================================================================
const express = require('express')
const bodyParser = require('body-parser')

const users = require("./routes/users")
const posts = require("./routes/posts")
const comments = require("./routes/comments")

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

app.use((req, res, next) => {
    const time = new Date()
    console.log(`request made at ${time.toLocaleTimeString()}`);
    console.log(`request type: ${req.method} sent to: ${req.url}`);
    next()
})

app.use("/users", users)
app.use("/posts", posts)
app.use("/comments", comments)  

// const users = require("./data/users")
// const posts = require("./data/posts")

// console.log(posts);
// console.log(users);

app.get('/', (req, res) => {
    res.send("Base home page")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})