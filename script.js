// script.js

let currentNote = 1;
const totalNotes = document.querySelectorAll('.note').length;

function showNote() {
    document.querySelectorAll('.note').forEach(note => note.classList.remove('active'));
    document.getElementById(`note-${currentNote}`).classList.add('active');
}

function nextNote() {
    if (currentNote < totalNotes) {
        currentNote++;
    } else {
        currentNote = 1; // loop back to the first note
    }
    showNote();
}

function prevNote() {
    if (currentNote > 1) {
        currentNote--;
    } else {
        currentNote = totalNotes; // loop back to the last note
    }
    showNote();
}

function startNotes() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById(`note-${currentNote}`).classList.add('active');
}