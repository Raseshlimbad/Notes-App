import express from 'express';
import Note from '../models/Note.js';
import middleware from '../middleware/middleware.js';

const router = express.Router();

router.post('/add' , middleware ,async (req,res) => {
    try {
        const { title , description } = req.body;

        const newNote = new Note({
            title , description
        })

        await newUser.save();
        return res.status(200).json({ success: true, message: "Account created Successfully" });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: true, message: "Error in Adding User" });
    }
})

export default router;