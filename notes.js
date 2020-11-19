const fs = require('fs')
const chalk = require('chalk')

const getNotes = (note) => {
    return ("My notes..." + note)
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => {if (note.title === title) note})

    !duplicateNote ? 
    success('New note added!!') &&
       ( notes.push({
        title: title,
        body: body
    }) && saveNotes(notes)) : errorMessage('Title taken! try a different one :)')
}

const removeNote = (noteByTitle) => {
    const notes = loadNotes()
    console.log('Notes.length', notes.length)

    const selectedNotes = notes.filter(note => {if (note.title !== noteByTitle) note})
    console.log('SelectedNotes.length', selectedNotes.length)
    saveNotes(selectedNotes)
    notes.length === selectedNotes.length ? errorMessage('No note found') : success('Note removed!')

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.magenta('Your notes are: '))
    notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find(note => (note.title === title))
    !selectedNote? errorMessage('No note found!') : styleNote(selectedNote.title, selectedNote.body)
}

const styleNote = (title, body) => {
    console.log(chalk.underline.magenta(title))
    console.log(chalk.cyan(body))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
    
} 

const errorMessage = (message) => {
    console.log(chalk.red.inverse('Error Message...', message))
}

const success = (message) => {
    console.log(chalk.green.inverse('Success!! ', message))
}

module.exports = {getNotes, addNote, removeNote, listNotes, readNote}