# Note app using Node.js

This project is a note app to manage your notes, you can Create, Read, Delete, List all notes.
There are define commands for you, to work with the terminal and play with the app.

## Important to know

- To initializa the app: **npm install**.
- Title and body are **required** inputs.
- Run the followed commands in terminal/command prompt.

## Commands availables

- To **create** a note: **add** --title=" " --body=" "

  > Example: node app.js add --title="First Note" --body="I love doing projects with Node.js"
  >
  > If the title is repeated you are going to see an error message in your terminal.
  > If you don't have errors you are going to see an success message and your note is saved.

- To **delete** a note: **remove** --title=" "

  > Example: node app.js remove --title="First Note"
  >
  > If the title doesn't exist you are going to see an error message in your terminal.
  > If the title match the title note you are going to see an success message and your note is removed.

- To **read** a note: **read** --title=" "

  > Example: node app.js read --title="First Note"
  >
  > If the title is doesn't exist/match you are going to see an error message in your terminal.
  > If the title match with the title note you are going to see the title with the details of the note.

- To **list** all notes: **list**
  > Example: node app.js list
