
let note_columns = document.getElementsByClassName('note-column');
let tab = document.getElementById('tab');

// Highlight clicked columns
let previous;

let highlight_column = (target) => {
    if (previous != null) {
        previous.classList.remove('highlight');
    }
    previous = target;
    target.classList.add('highlight');
}

// Add column

let add_column = (place = null, fret = null, string_num = null) => {
    let col = document.createElement('div');
    col.classList.add('note-column');

    for (let i = 0; i < num_strings; i++) {
        let note = document.createElement('span');
        if (fret != null && string_num == i) {
            note.textContent = fret;
        } else {
            note.textContent = '-';
        }

        col.appendChild(note);
    }
    
    col.addEventListener('click', function() {
        highlight_column(col);
    });

    if (place != null) {
        tab.insertBefore(col, note_columns[place]);
    } else {
        tab.appendChild(col);
    }
    
    // Highlight newly added column
    highlight_column(col);
}

let remove_column = (place) => {
    len = note_columns.length;
    if (len <= 0) {
        return null;
    }

    if (place > len) {
        // Remove the last column
        note_columns[len - 1].remove();
    } else {
        // Remove the specified column
        note_columns[place].remove();
    }
}

// Add first column on start

add_column();