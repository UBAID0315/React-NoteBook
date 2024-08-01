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

// Route 2: Update or delete notes of user (updation)
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tags } = req.body

        // Create a newNote object
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tags) { newNote.tags = tags }

        let note = await Notes.findById(req.params.id)
        if (!note) { res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {               // for ensuring that the login user 
            return res.status(401).send("Not Allowed")          // can not change notes of any other user
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

// (deletion)
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {

        let note = await Notes.findById(req.params.id)
        if (!note) { res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {               // for ensuring that the login user 
            return res.status(401).send("Not Allowed")          // can not delete notes of any other user
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ note });
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

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