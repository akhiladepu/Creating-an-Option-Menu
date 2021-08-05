var EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const readline = require('readline');

//    "start": "nodemon app.js"

var books = ["Atomic Habits"];

const readlineClone = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


eventEmitter.on("showBooks", () => {
    // console.log("1");
    // for (var i = 0; i < books.length; i++) {
        console.table(books);
    // }
});

eventEmitter.on("addBook", (bookName) => {
    // console.log("2");
    books.push(bookName);
    console.log(`${bookName} added succesfully.`)
    run();
});

function run() {
    readlineClone.question("Press 1 - Show all books 2 - Add a new book 3 - Quit  ", function (value) {
        if (value == 1) {
            eventEmitter.emit("showBooks");
            // console.log("1");
            run();
        } else if (value == 2) {
            readlineClone.question("Please Enter the name of book  ", function (book) {
                eventEmitter.emit("addBook", book);
            })

            // console.log("2");
            run();
        } else if (value == 3) {
            readlineClone.question("Are you sure you want to quit - press Y to quit  ", function (quit) {
                if (quit == "Y") {
                    readlineClone.close();
                } else {
                    run();
                }
            })
        }else {
            console.log("You have selected an invalid entry so please press 1, 2 or 3  ");
            run();
        }
    });
}

run();

readlineClone.on("close", function () {
    console.log("Bye Bye");
})