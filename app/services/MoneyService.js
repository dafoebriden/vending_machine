import { AppState } from "../AppState.js";

class MoneyService {
    addMoney() {
        AppState.money += .25
    }
}

export const moneyService = new MoneyService()