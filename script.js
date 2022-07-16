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
    console.log(Library[Library.length - 1]);
    const newDiv = document.createElement("div");
    
    newDiv.classList.add('newDiv');
    document.getElementById('books').appendChild(newDiv);
    newDiv.innerHTML = book.title + ' by '  + book.author + ', ' + book.pages + ' pages, ' + book.status + '.  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID: ' + book.id;
    const gone = document.createElement("button");
    newDiv.appendChild(gone);
    gone.addEventListener("click", function(){
        newDiv.remove();
    });
}

document.addEventListener ('DOMContentLoaded', ()=>{
    document.getElementById('add').addEventListener('click', addBook)
});

function removeBook(){
    newDiv.remove();
}
