const fs = require('fs')

const getNotes = (note) => {
    return ("My notes..." + note)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log('ALL NOTES', notes)

    const duplicatesNotes = notes.filter(note => note.title === title ? note :  '')

    duplicatesNotes.length === 0 ? 
        notes.push({
        title: title,
        body: body
    }) &&
    saveNotes(notes) : console.log('Note title taken! try a different one :)')
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

module.exports = {getNotes, addNote}