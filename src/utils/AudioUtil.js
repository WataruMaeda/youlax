import { Alert } from 'react-native';
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

export class AudioUtil {
    constructor() {
        this.sound = '';
        this.isReady = false;
        this.isPlaying = false;
    }

    control(sound) {
        // Invarid Sound
        if (sound.length == 0 || sound == null) { return }
        
        // Playing
        if (this.sound == sound &&
            this.isReady == true &&
            this.audio != null) {
            if (this.isPlaying == true) {
                this.isPlaying = false;
                this.audio.pause();
            } else {
                this.isPlaying = true;
                this.audio.play();
            }
        }
        
        // Ready, but not playing
        if (this.sound != sound) {
            if (this.audio != null) this.release();
            this.ready(sound);
        }
    }

    ready(sound) {
        this.audio = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                this.isReady = false;
                Alert.alert('Failed to load the sound');
            } else {
                this.sound = sound;
                this.isReady = true;
                this.isPlaying = true;
                this.audio.setNumberOfLoops(-1);
                this.play();
            }
        });
    }

    play() { this.audio.play(); }

    release() {
        this.isPlaying = false;
        this.isPlaying = false;
        this.audio.stop();
        this.audio.release();
    }

    pause() {

    }
}