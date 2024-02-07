import { FoodController } from "./controllers/FoodController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [FoodController, MoneyController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])