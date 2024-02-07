import { AppState } from "../AppState.js";

class FoodService {

    buyFood(foodName) {
        console.log(foodName)

        const foundFood = AppState.foods.find(food => food.name == foodName)

        if (AppState.money < foundFood.price) {
            window.alert('You broke! Come back next time')
            return
        }
        AppState.money -= foundFood.price
    }
}

export const foodService = new FoodService()