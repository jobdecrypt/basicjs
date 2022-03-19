// "Objects" Sample

let a = { x: 1 };

const f2 = function f1(b) {
  b.x = 3;
};

f2(a);

console.log(a);

// NOTE: Arrays and Objects are passed by "Reference"
// "Array" Sample

var books = [];

function book(title) {
  return { title: title };
}

function factory(n) {
  // for Loops always has its own block
  for (let i = 0; i < n; i++) {
    books.push(book("a" + i));
  }

  return books;
}

function stampBooks(myBooks) {
  // NOTE THIS bottom Line for Study
  myBooks.forEach((item) => (item.owner = "me"));
}

factory(3);
stampBooks(books);

console.log(books);
