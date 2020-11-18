const fs = require('fs')
const chalk = require('chalk')

const getNotes = (note) => {
    return ("My notes..." + note)
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicatesNotes = notes.filter(note => note.title === title ? note :  '')

    duplicatesNotes.length === 0 ? 
        notes.push({
        title: title,
        body: body
    }) && console.log(chalk.green.inverse('New note added!!')) && saveNotes(notes) : console.log(chalk.red.inverse('Note title taken! try a different one :)'))
}

const removeNote = (noteByTitle) => {
    const notes = loadNotes()
    console.log('Notes.length', notes.length)

    const selectedNotes = notes.filter(note => note.title !== noteByTitle ?  note : '')
    console.log('SelectedNotes.length', selectedNotes.length)
    saveNotes(selectedNotes)
    notes.length === selectedNotes.length ? console.log(chalk.red.inverse('No note found')) : console.log(chalk.green.inverse('Note removed!'))

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

module.exports = {getNotes, addNote, removeNote}