// Function to add a new note
function addNote() {
    const noteText = document.getElementById('noteText').value;
    
    if (noteText.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    const notesList = document.getElementById('notes');
    const newNote = document.createElement('li');
    newNote.textContent = noteText;

    notesList.appendChild(newNote);

    // Clear the input field
    document.getElementById('noteText').value = "";
}
