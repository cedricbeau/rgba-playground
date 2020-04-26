
var rgbaPlayground = {

  ranges: document.querySelectorAll(".selector_range"),
  values: document.querySelectorAll(".selector_value"),
  result: document.querySelector('.resultat'),
  txt: document.querySelector('.resultat_value'),

  init: function() {
    this._displayRgba()
    this._showValue()
  },

  _displayRgba() {

    this.values[0].innerHTML = this.ranges[0].value;
    this.values[1].innerHTML = this.ranges[1].value;
    this.values[2].innerHTML = this.ranges[2].value;
    this.values[3].innerHTML = this.ranges[3].value;

    var resultValues = "rgba(" + this.ranges[0].value + ", " + this.ranges[1].value + ", " + this.ranges[2].value + ", " + this.ranges[3].value + ")"
    this.result.style.background = resultValues
    this.txt.innerHTML = resultValues

  },


  // Display values
  _showValue: function () {
    var self = this

    for (range of this.ranges) {
      range.addEventListener('input', function() {
        self._displayRgba()
      });
    }
  }
}
rgbaPlayground.init()


