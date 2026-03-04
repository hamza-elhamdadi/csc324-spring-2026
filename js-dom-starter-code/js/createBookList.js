function addBookToList(bookName){
    // TODO: create a new list element with the book name, and add it to the ul with id="book-list"
    const li = document.createElement("li");
    li.textContent = bookName;

    document.querySelector("#book-list").appendChild(li);

}

function addArrayOfBooksToList(books) {
    // TODO: foreach string in books, create a book and add it to the ul using the addBookToList callback function
    books.forEach(addBookToList);

    for(let book of books){
        addBookToList(book);
    }
}

export { addBookToList, addArrayOfBooksToList };