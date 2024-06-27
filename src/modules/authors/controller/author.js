import Author from '../../../../database/models/author.js';

export const addAuthor = async (req, res) => {
    try {
        const result = await Author.create(req.body);
        return res.status(201).json({ message: 'Author created successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAuthors = async (req, res) => {
    try {
        const result = await Author.find()
        .select('name bio birthDate books -_id');    
        return res.status(200).json({ message: 'Authors fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAuthor = async (req, res) => {
    try {
        const result = await Author.findById(req.params.author_id)
        .select('name bio birthDate books -_id');
        return res.status(200).json({ message: 'Author fetched successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateAuthor = async (req, res) => {
    try {
        const result = await Author.findByIdAndUpdate(req.params.author_id, req.body, {new: true});
        return res.status(200).json({ message: 'Author updated successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteAuthor = async (req, res) => {
    try {
        const result = await Author.findByIdAndDelete(req.params.uthor_id);
        return res.status(200).json({ message: 'Author deleted successfully', data: result });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};



