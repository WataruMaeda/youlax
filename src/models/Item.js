class Category {
  constructor(key, title, data, image) {
    this.key = key;
    this.title = title;
    this.data = data;
    this.image = image;
  }
}

class Item {
  constructor(key, image, sound) {
    this.key = key;
    this.image = image;
    this.sound = sound;
  }
}

const fire = [
  new Item(0, require('../assets/images/items/fire/fire_1.png'), 'fire_1.mp3'),
  new Item(1, require('../assets/images/items/fire/fire_2.png'), 'fire_2.mp3'),
  new Item(2, require('../assets/images/items/fire/fire_3.png'), 'fire_3.mp3'),
  new Item(3, require('../assets/images/items/fire/fire_4.png'), 'fire_4.mp3'),
  new Item(4, require('../assets/images/items/fire/fire_5.png'), 'fire_5.mp3'),
]

const rain = [
  new Item(0, require('../assets/images/items/rain/rain_1.png'), 'rain_1.mp3'),
  new Item(1, require('../assets/images/items/rain/rain_2.png'), 'rain_2.mp3'),
  new Item(2, require('../assets/images/items/rain/rain_3.png'), 'rain_3.mp3'),
  new Item(3, require('../assets/images/items/rain/rain_4.png'), 'rain_4.wav'),
  new Item(4, require('../assets/images/items/rain/rain_5.png'), 'rain_5.mp3'),
]

const forest = [
  new Item(0, require('../assets/images/items/forest/forest_1.png'), 'forest_1.mp3'),
  new Item(1, require('../assets/images/items/forest/forest_2.png'), 'forest_2.mp3'),
  new Item(2, require('../assets/images/items/forest/forest_3.png'), 'forest_3.mp3'),
  new Item(3, require('../assets/images/items/forest/forest_4.png'), 'forest_4.mp3'),
  new Item(4, require('../assets/images/items/forest/forest_5.png'), 'forest_5.mp3'),
]

const ocean = [
  new Item(0, require('../assets/images/items/ocean/ocean_1.png'), 'ocean_1.mp3'),
  new Item(1, require('../assets/images/items/ocean/ocean_2.png'), 'ocean_2.mp3'),
  new Item(2, require('../assets/images/items/ocean/ocean_3.png'), 'ocean_3.wav'),
  new Item(3, require('../assets/images/items/ocean/ocean_4.png'), 'ocean_4.mp3'),
  new Item(4, require('../assets/images/items/ocean/ocean_5.png'), 'ocean_5.mp3'),
]

const wind = [
  new Item(0, require('../assets/images/items/wind/wind_1.png'), 'wind_1.mp3'),
  new Item(1, require('../assets/images/items/wind/wind_2.png'), 'wind_2.mp3'),
  new Item(2, require('../assets/images/items/wind/wind_3.png'), 'wind_3.mp3'),
  new Item(3, require('../assets/images/items/wind/wind_4.png'), 'wind_4.mp3'),
  new Item(4, require('../assets/images/items/wind/wind_5.png'), 'wind_5.mp3'),
]

export const items = [
  new Category(0, 'Rain', rain, require('../assets/images/menus/rain.png')),
  new Category(1, 'Forest', forest, require('../assets/images/menus/forest.png')),
  new Category(2, 'Ocean', ocean, require('../assets/images/menus/ocean.png')),
  new Category(3, 'Fire', fire, require('../assets/images/menus/fire.png')),
  new Category(4, 'Wind', wind, require('../assets/images/menus/wind.png'))
]