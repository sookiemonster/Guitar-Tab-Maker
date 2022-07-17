
let note_columns = document.querySelectorAll('.note-column');
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

for (let i = 0; i < note_columns.length; i++) {
    note_columns[i].addEventListener('click', function() {
        highlight_column(note_columns[i]);
    });
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

        col.appendChild(note)
    }
    
    col.addEventListener('click', function() {
        highlight_column(col);
    });

    // Highlight newly added column
    highlight_column(col);

    if (place != null) {
        tab.insertBefore(col, note_columns[place]);
    } else {
        tab.appendChild(col);
    }
}

let remove_column = () => {

}

// Update note-list based on changes to the tab

const config = { 
    childList: true
}

const observer = new MutationObserver(function() {
    note_columns = document.querySelectorAll('.note-column');
    // console.log('TAB CHANGED');
    // console.log(note_columns);
});

observer.observe(tab, config);