class BurgerController {
  constructor(model, view) {
    this._model = model;
    this._view = view;
  }

  init() {
    // loading = true
    let self = this;
    this._model.getSizes(function(sizes) {
      self._view.renderSizes(sizes);
      // loading = false
    });
    this._model.getStuffings(function(stuffings) {
      self._view.renderStuffings(stuffings);
    });
    this._model.getSauces(function(sauces) {
      self._view.renderSauces(sauces);
    });
    this._model.getBurgerData(function(data) {
      self._view.renderBurgerData(data);
    });
    this.listeners();
  }

  listeners() {
    let self = this;
    this._view.listenSizeChange(function(chosenSizeName) {
      self._model.changeSize(chosenSizeName, function(burgerData){self._view.renderBurgerData(burgerData)});
      self._model.changeImageSize(chosenSizeName);
      // 1) Отпавить имя выбранного размера в модель ( self._model.changeSize(chosenSizeName, function(burgerData){self._view.renderBurgerData(burgerData)}) )
    });
    this._view.listenStuffingChange(function(chosenStuffingName) {
      self._model.changeStuffing(chosenStuffingName, function(burgerData){self._view.renderBurgerData(burgerData)});
    });
    this._view.listenSauceChange(function(chosenSauceName) {
      self._model.changeSauce(chosenSauceName, function(burgerData){self._view.renderBurgerData(burgerData)});
    });
  }
}