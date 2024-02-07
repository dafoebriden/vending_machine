import { AppState } from "../AppState.js"

export class Food {

    constructor(data) {

        this.name = data.name
        this.price = data.price
        this.img = data.img
    }

    get FoodCatalogHTMLTemplate() {
        return `
        <div class="col-2 m-4 p-0 rounded border border-dark border-3">
          <img class="contain"
            src="${this.img}"
            alt="image">
          <div class="d-flex justify-content-evenly align-items-center bg-dark text-light fw-bold m-0 p-2">
            <p class="m-0 p-0">${this.name}</p>
            <p class="m-0 px-1">$${this.price}</p>
            <button onclick="app.FoodController.buyFood('${this.name}')"
              class="btn btn bg-dark text-light border border-light">Buy</button>
          </div>
        </div>
        `
    }
    get MyFoodCatalogHTMLTemplate() {
        return `
        <div class="col-2 m-4">
          <img class="contain"
            src="${this.img}"
            alt="image">
          <div class="d-flex justify-content-center text-center bg-dark text-light p-2">
            <h4>${this.name}</h4>
          </div>
        </div>
        `
    }
}