// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser
app.use(bodyParser.json());

// Create comments array
const comments = {};

// Create routes
app.get('/posts/:id/comments', (req, res) => {
    res.send(comments[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    const commentsForPost = comments[id] || [];
    commentsForPost.push({ id: id, content: content });
    comments[id] = commentsForPost;

    res.status(201).send(commentsForPost);
});

// Start server
app.listen(4001, () => {
    console.log('Listening on 4001');
});