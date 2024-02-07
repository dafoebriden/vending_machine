import { AppState } from "../AppState.js"
import { moneyService } from "../services/MoneyService.js"
import { setText } from "../utils/Writer.js"

function _printMoney() {
    setText('quartersCount', AppState.money)
}

export class MoneyController {
    constructor() {
        AppState.on('money', _printMoney)
    }
    addMoney() {
        moneyService.addMoney()
    }
}