import express from 'express'; 
import bookRouter from './modules/books/book.routes.js'; 
import authorRouter from './modules/authors/author.routes.js';

const bootstrap = (app) => {
    app.use(express.json());

    app.use('/books', bookRouter);
    app.use('/authors', authorRouter);

    app.use('*', (req, res) => {
        return res.json({ message: "not found routing" });
    });
};

export default bootstrap;