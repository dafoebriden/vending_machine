import { AppState } from "../AppState.js";
import { foodService } from "../services/FoodService.js";
import { setHTML } from "../utils/Writer.js";

function _fillVendingMachine() {
    const food = AppState.foods
    let htmlString = ''
    food.forEach(food => htmlString += food.FoodCatalogHTMLTemplate)
    setHTML('foodCatalog', htmlString)
}

function _fillMyCart() {
    const myfood = AppState.myFood
    let htmlString = ''
    myfood.forEach(food => htmlString += food.MyFoodCatalogHTMLTemplate)
    setHTML('myfood', htmlString)
}

export class FoodController {
    constructor() {
        _fillVendingMachine()

        AppState.on('myFood', _fillMyCart)
    }

    buyFood(foodName) {
        foodService.buyFood(foodName)
    }
}