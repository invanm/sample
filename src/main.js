let addNoteBtn = document.querySelector('#addNoteBtn');

addNoteBtn.onclick = () => {

    let newNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes');



    let note = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    checkbox.onclick = function(){
        let parent = this.parentElement;
        if (this.checked) {
            parent.classList.add('isDone');

        } else {
            parent.classList.remove('isDone');
        }

    }

    note.classList.add('note');
    note.innerHTML = `<div>${newNoteInput.value}</div>`;
    note.appendChild(checkbox);
    newNoteInput.value = '';
    notes.appendChild(note);
}