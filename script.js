let Library = [];

const addBook = (ev)=>{
    ev.preventDefault();
    let book = {
        id: Date.now(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        status: document.getElementById('status').value
    }
    Library.push(book);
    document.forms[0].reset();
}

document.addEventListener ('DOMContentLoaded', ()=>{
    document.getElementById('add').addEventListener('click', addBook)
});