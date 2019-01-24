class App {
  constructor() {
    this.model = new BurgerModel();
    this.view = new BurgerView();
    this.controller = new BurgerController(this.model, this.view);
  }

  init() {
    this.controller.init();
  }
}

const APP = new App();
APP.init();