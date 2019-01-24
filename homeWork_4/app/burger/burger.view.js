class BurgerView {

  constructor() {
    this._selectors = {
      sizes$: $('.burger__sizes'),
      stuffings$: $('.burger__stuffings'),
      sauces$: $('.burger__sauces'),
      preview$: $('.burger-preview')
    }
    this._templates = {
      size: `
        <label>
          {{viewName}}
          <input name="size" type="radio" value="{{name}}" {{isChecked}}>
        </label>
      `,
      stuffing: `
        <option value="{{name}}">{{viewName}}</option>
      `,
      sauce: `
        <label>
          {{viewName}}
          <input name="sauce" type="radio" value="{{name}}" {{isChecked}}>
        </label>
      `,
      preview: `
        <div class="burger-preview__size">Size: {{sizeViewName}}</div>
        <div class="burger-preview__stuffing">Stuffing: {{stuffingViewName}}</div>
        <div class="burger-preview__sauce">Sauce: {{sauceViewName}}</div>
      `
    }
  }

  renderSizes(sizes) {
    sizes.forEach(size => {
      let template = this._templates.size
        .replace('{{viewName}}', size.viewName)
        .replace('{{name}}', size.name)
        .replace('{{isChecked}}', size.isChecked ? 'checked' : '');
      this._selectors.sizes$.append(template);
    });
  }

  renderStuffings(stuffings) {
    stuffings.forEach(s => {
      let template = this._templates.stuffing
        .replace('{{name}}', s.name)
        .replace('{{viewName}}', s.viewName);
      this._selectors.stuffings$.append(template);
    });
    this._selectors.stuffings$.val(stuffings.find(s => s.isChecked).name)
  }

  renderSauces(sauces) {
    sauces.forEach(sauce => {
      let template = this._templates.sauce
        .replace('{{viewName}}', sauce.viewName)
        .replace('{{name}}', sauce.name)
        .replace('{{isChecked}}', sauce.isChecked ? 'checked' : '');
      this._selectors.sauces$.append(template);
    });
  }

  renderBurgerData(burgerData) {
    let template = this._templates.preview
      .replace('{{sizeViewName}}', burgerData.size.viewName)
      .replace('{{stuffingViewName}}', burgerData.stuffing.viewName)
      .replace('{{sauceViewName}}', burgerData.sauce.viewName);
    this._selectors.preview$.html(template)
  }

  listenSizeChange(cb) {
    $(".burger__sizes input[type='radio']").on('change', function(event) {
      cb(event.target.value);
    });
    // 1) Прослушать изменения radio buttons размеров
    // 2) ПОлучить value выбранного размера (this)
    // 3) cb(value выбранного размера)
  }

  listenStuffingChange(cb) {
    $('select').on('change', function(event) {
      cb(event.target.value);
    });
  }

  listenSauceChange(cb) {
    $(".burger__sauces input[type='radio']").on('change', function(event) {
      cb(event.target.value);
    });
  }
}