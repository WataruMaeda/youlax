import { AsyncStorage } from 'react-native';
const KEY = '@USER_ACCOUNT_KEY';
const USER_ID_KEY = '@USER_ID_KEY';

// UUID Generator
import UUIDGenerator from 'react-native-uuid-generator';

export class UserAccount {

    _getUserId(callback = (userId) => {}) {
        this._getFromStorage(USER_ID_KEY, (success, id) => {
            if (success == true) {
                callback(id);
            } else {
                UUIDGenerator.getRandomUUID((userId) => {
                    this._setToStorage(USER_ID_KEY, userId, (success) => {});
                    callback(userId);
                });
            }
        });
    }

    _setToStorage(key, val, callback = (success) => {}) {
        let jsonStr = JSON.stringify(val);
        AsyncStorage.setItem(key, jsonStr, (error) => {
            (error == null) ?
                callback(true) : callback(false);
        });
    }

    _getFromStorage(key, callback = (success, value) => {}) {
        AsyncStorage.getItem(key, (error, value)=> {
            (value != null && error == null) ?
              callback(true, JSON.parse(value)) : callback(false, '');
          });
    }
}