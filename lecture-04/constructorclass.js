class Song {
    constructor (title, artist){
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemiam Rhapsody", "Queen");
console.log(mySong);
console.log(typeof mySong);
/* OUTPUT : Song { title: 'Bohemiam Rhapsody', artist: 'Queen' }
object
*/