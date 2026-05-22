const titleInput = document.getElementById("titleInput");
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

renderNotes();

addBtn.addEventListener("click", addNote);

function addNote() {

  const title = titleInput.value.trim();
  const text = noteInput.value.trim();

  if (title === "" || text === "") {
    alert("Please fill all fields");
    return;
  }

  const note = {
    id: Date.now(),
    title: title,
    text: text,
    date: new Date().toLocaleString()
  };

  notes.push(note);

  saveNotes();

  renderNotes();

  titleInput.value = "";
  noteInput.value = "";
}

function renderNotes() {

  notesContainer.innerHTML = "";

  notes.forEach((note) => {

    const card = document.createElement("div");
    card.classList.add("note-card");

    const title = document.createElement("h2");
    title.textContent = note.title;

    const text = document.createElement("p");
    text.textContent = note.text;

    const date = document.createElement("div");
    date.textContent = note.date;
    date.classList.add("note-date");

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("note-buttons");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", () => {
      editNote(note.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      deleteNote(note.id);
    });

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(date);
    card.appendChild(buttonDiv);

    notesContainer.appendChild(card);
  });
}

function deleteNote(id) {

  notes = notes.filter((note) => note.id !== id);

  saveNotes();

  renderNotes();
}

function editNote(id) {

  const note = notes.find((note) => note.id === id);

  const updatedTitle = prompt("Edit title", note.title);

  const updatedText = prompt("Edit note", note.text);

  if (updatedTitle === null || updatedText === null) {
    return;
  }

  note.title = updatedTitle;
  note.text = updatedText;

  saveNotes();

  renderNotes();
}

function saveNotes() {

  localStorage.setItem("notes", JSON.stringify(notes));
}