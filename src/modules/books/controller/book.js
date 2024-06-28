import Book from '../../../../database/models/book.js';

export const addBook = async (req, res) => {
    try {
        if(!req.body.title || !req.body.content || !req.body.author) {
            return res.status(400).json({ message: 'Missing required fields: title, content and authorId' });
        }
        const result = await Book.create(req.body);
        return res.status(201).json({ message: 'Book created successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.  Please try again later.' });
    }
};

export const getBooks = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;

        // Fetch the books with pagination
        const result = await Book.find()
            .select('title content author publishedDate -_id')
            .skip(skip)
            .limit(parseInt(limit));

        // Get the total number of books
        const total = await Book.countDocuments();

        return res.status(200).json({
            message: 'Books fetched successfully',
            data: result,
            pagination: {
                totalItems: total,
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / limit),
                itemsPerPage: parseInt(limit)
            }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error. Please try again later.' });
    }
};

export const getBook = async (req, res) => {
    try {
        const result = await Book.findById(req.params.book_id)
        .select('title content author publishedDate -_id');
        if(!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.  Please try again later.' });
    }
};

export const updateBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndUpdate(req.params.book_id, req.body, {new: true});
        if(!result){
            return res.status(404).json({ message: 'Book not found'});
        }
        return res.status(200).json({ message: 'Book updated successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.  Please try again later.' });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.book_id);
        if(!result){
            return res.status(404).json({ message: 'Book not found'});
        }
        return res.status(200).json({ message: 'Book deleted successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.  Please try again later.' });
    }
};



