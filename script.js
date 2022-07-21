let Library = [];

const addBook = (ev)=>{
    ev.preventDefault();
    let book = {
        id: Date.now(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
    }
    Library.push(book);
    document.forms[0].reset();
    console.log(Library[Library.length - 1]);
    
    const newDiv = document.createElement("div");
    newDiv.classList.add('newDiv');
    document.getElementById('books').appendChild(newDiv);

    const bookId = document.createElement("p")
    bookId.innerHTML = 'ID: ' + book.id;
    bookId.classList.add("bookId");
    newDiv.appendChild(bookId);

    const bookText = document.createElement("p");
    bookText.innerHTML = book.title + ' by '  + book.author + ', ' + book.pages + ' pages' + '.'
    bookText.classList.add('bookText')
    newDiv.appendChild(bookText)
    
    const statusDisplay = document.createElement("button");
    statusDisplay.innerHTML = "Unfinished";
    statusDisplay.classList.add("statusDisplay")
    newDiv.appendChild(statusDisplay);
    statusDisplay.addEventListener("click", function(){
        if (statusDisplay.innerHTML == "Unfinished") {
            statusDisplay.innerHTML = "Finished"
        } else if (statusDisplay.innerHTML == "Finished") {
            statusDisplay.innerHTML = "Unfinished"
        }
    });

    const removeDiv = document.createElement("button");
    removeDiv.classList.add("removeDiv");
    removeDiv.innerHTML = 'x';
    newDiv.appendChild(removeDiv);
    removeDiv.addEventListener("click", function(){
        newDiv.remove();
    });

}



document.addEventListener ('DOMContentLoaded', ()=>{
    document.getElementById('add').addEventListener('click', addBook)
});

function removeBook(){
    newDiv.remove();
}
