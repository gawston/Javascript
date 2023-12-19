class Song {
    play() {
        console.log('Playing!');
    }

    stop() {
        console.log('Stopping!');
    }
}

const mySong = new Song();

mySong.play();
mySong.stop();