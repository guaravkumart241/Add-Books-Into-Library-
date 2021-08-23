console.log('This is working')

//constructor
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type

}

//Display Constructor
function Display() {

}

//Add methods to display prototypes
Display.prototype.add = function (book) {
    console.log('Adding');
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>`;
    tableBody.innerHTML += uiString;
}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryform.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 2) {
        return false;
    }
    return true;
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>`;
    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}


//Add submit event listener to from libraryform
let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log('Working')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }

    if (programming.checked) {
        type = fiction.value;
    }
    if (cooking.checked) {
        type = fiction.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('Success', 'Your book has been successfully added');
    }
    else {
        display.show('Error', 'Sorry ! You cannot add this book')
    }

    e.preventDefault();
}
