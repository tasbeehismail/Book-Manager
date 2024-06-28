import Author from '../../../../database/models/author.js';

export const addAuthor = async (req, res) => {
    try {
        if(!req.body.name) {
            return res.status(400).json({ message: 'Missing required fields: name' });
        }
        const result = await Author.create(req.body);
        return res.status(201).json({ message: 'Author created successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAuthors = async (req, res) => {
    try {
        const result = await Author.find()
        .select('-__v -updatedAt -createdAt -_id')
        .populate('books', 'title -_id'); 
        return res.status(200).json({ message: 'Authors fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAuthor = async (req, res) => {
    try {
        const result = await Author.findById(req.params.author_id)
        .select('-__v -updatedAt -createdAt -_id')
        .populate('books', 'title -_id'); 
        if(!result){
            return res.status(404).json({ message: 'Author not found'});
        }
        return res.status(200).json({ message: 'Author fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateAuthor = async (req, res) => {
    try {
        const result = await Author.findByIdAndUpdate(req.params.author_id, req.body, {new: true});
        if(!result){
            return res.status(404).json({ message: 'Author not found'});
        }
        return res.status(200).json({ message: 'Author updated successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteAuthor = async (req, res) => {
    try {
        const result = await Author.findByIdAndDelete(req.params.author_id);
        if(!result){
            return res.status(404).json({ message: 'Author not found'});
        }
        return res.status(200).json({ message: 'Author deleted successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};



