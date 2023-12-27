// Parent class
class Media {
    constructor(info) {
        this.pulishDate = info.pulishDate;
        this.name = info.name;
    }
}

// Child class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohenmian Rhapsody",
    pulishDate: 1975,
});

console.log(mySong);