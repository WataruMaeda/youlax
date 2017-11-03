
class Items {
  constructor(key, title, image, sound) {
    this.key = key;
    this.title = title;
    this.image = image;
    this.sound = sound;
  }
}

export const items = [
  new Items(
    0, 'Heavy Rain', require('../assets/images/bg.png'), ""
  ),
  new Items(
    1, 'Heavy Rain', require('../assets/images/bg.png'), ""
  ),
  new Items(
    2, 'Heavy Rain', require('../assets/images/bg.png'), ""
  ),
  new Items(
    3, 'Heavy Rain', require('../assets/images/bg.png'), ""
  ),
  new Items(
    4, 'Heavy Rain', require('../assets/images/bg.png'), ""
  ),
]