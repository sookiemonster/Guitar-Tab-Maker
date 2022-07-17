
let note_columns = document.querySelectorAll('.note-column');
let previous;

let highlight_column = (target) => {
    if (previous != null) {
        previous.classList.remove('highlight');
    }
    previous = target;
    target.classList.add('highlight');
}

for (let i = 0; i < note_columns.length; i++) {
    note_columns[i].addEventListener('click', function() {
        highlight_column(note_columns[i]);
    });
}

console.log(note_columns);