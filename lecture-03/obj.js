const book = {
    title: "1984",
    author: "Geoege Orwell",
    isAvailable: true,
    checkOut: function(){
        this.isAvailable = false;
    },
    checkIn: function(){
        this.isAvailable = true;
    }
};
console.log(book.isAvailable); // true
book.checkOut();
console.log(book.isAvailable); // false
book.checkIn();
console.log(book.isAvailable); // true