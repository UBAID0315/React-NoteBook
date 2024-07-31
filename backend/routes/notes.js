const express = require('express')
const router = express.Router();
const Notes = require('../models/Note')
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchUser')

// Route 1: Create the notes of a user
router.post('/addnote', fetchuser, [

    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a description of minimum length 5').isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tags } = req.body;

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tags, user: req.user.id
        })
        const saveNote = await note.save()
        res.json(saveNote)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

// Route 2: Add or delete notes of user

// Route 3: Fetch all the notes of a specific user
router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.send(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

module.exports = router