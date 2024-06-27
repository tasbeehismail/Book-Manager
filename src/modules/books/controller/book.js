import Book from '../../../../database/models/book.js';

export const addBook = async (req, res) => {
    try {
        const result = await Book.create(req.body);
        return res.status(201).json({ message: 'Book created successfully', data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getBooks = async (req, res) => {
    try {
        const result = await Book.find()
        .select('title content author publishedDate -_id');    
        return res.status(200).json({ message: 'Books fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getBook = async (req, res) => {
    try {
        const result = await Book.findById(req.params.book_id)
        .select('title content author publishedDate -_id');
        return res.status(200).json({ message: 'Book fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndUpdate(req.params.book_id, req.body, {new: true});
        return res.status(200).json({ message: 'Book updated successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.book_id);
        return res.status(200).json({ message: 'Book deleted successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};



