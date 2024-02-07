import { Food } from './models/Food.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  money = 0

  foods = [
    new Food({ name: 'Pizza', price: 8, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=3781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Food({ name: 'French Toast', price: 5, img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D' }),
    new Food({ name: 'Banana Pancakes', price: 4.5, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' }),
    new Food({ name: 'Blueberry Pancakes', price: 5, img: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' })
  ]
  /** @type {Food[]} */
  myFood = []

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}


export const AppState = createObservableProxy(new ObservableAppState())