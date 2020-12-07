// Variables
const { writeFile } = require("fs");
const notesDataBase = require("../db/db.json");

// Main function
module.exports = function (app) {

  // Function to write new notes to data base
  function updateNotesDataBase() {
    // Write to file method
    writeFile("./db/db.json",JSON.stringify(notesDataBase), err => {
      if(err){
        console.log(err);
      }
    })
  }
  // Method to get data from data base when requested
  app.get("/api/notes", function (req, res) {
    res.json(notesDataBase);
  });

  // Method to add(post) new notes to data base and create unique ID for each note.
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    let Id = 1;

    // Loop to check if note already has id and if so, compare with element i id
    for (let i = 1; i < notesDataBase.length; i++) {
      let oneNote = notesDataBase[i];

      if (oneNote.id > Id) Id = oneNote.id;
      
    }
    // Assign new value to id of new note
    newNote.id = Id + 1;

    // Push new note to data base
    notesDataBase.push(newNote);
    // Rewrite  data base file with new array
    updateNotesDataBase();

    // Send new note back
    res.json(newNote);
  });

  // Method to delete note from data base according to it ID
  app.delete("/api/notes/:id", function (req, res) {
    // Loop through da base to find note with id that supposed to delete
    for (let i = 0; i < notesDataBase.length; i++) {
      if (notesDataBase[i].id == req.params.id) {
        // Use splice method to divide data base array in 2 parts
        notesDataBase.splice(i, 1);
        break;
      }
    }
    // Rewrite  data base file with new array
    updateNotesDataBase();
    // Send data to the front end
    res.json(notesDataBase);
  });
 
};
