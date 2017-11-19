import { AsyncStorage } from 'react-native';
const KEY = '@USER_ACCOUNT_KEY';

export class UserAccount {
    constructor(name, sound, imageUrl) {
        this.name = name;
        this.sound = sound;
        this.imageUrl = imageUrl;
    }

    _setToStorage(callback = (success) => {}) {
        let jsonStr = JSON.stringify(this);
        AsyncStorage.setItem(KEY, jsonStr, (error) => {
            (error == null) ?
                callback(true) : callback(false);
        });
    }

    _getFromStorage(callback = (success, value) => {}) {
        AsyncStorage.getItem(KEY, (error, value)=> {
            (value != null && error == null) ?
              callback(true, JSON.parse(value)) : callback(false, '');
          });
    }
}