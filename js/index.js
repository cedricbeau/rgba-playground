// -----------------------------------------------------------------------
// GET RGB
// -----------------------------------------------------------------------

function rgbDef(value1, value2, value3, range1, range2, range3, result, txt) {

  value1.innerHTML = range1;
  value2.innerHTML = range2;
  value3.innerHTML = range3;

  let resultValues = "rgb(" + range1 + ", " + range2 + ", " + range3 + ")";
  
  result.style.background = resultValues
  txt.innerHTML = resultValues

}

function rgbDefFunc() {
  
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')

  rgbDef(values[0], values[1], values[2], ranges[0].value, ranges[1].value, ranges[2].value, result, txt)

}

// -----------------------------------------------------------------------
// GET RGBA
// -----------------------------------------------------------------------

function rgbaDef(value1, value2, value3, value4, range1, range2, range3, range4,  result, txt) {

  value1.innerHTML = range1;
  value2.innerHTML = range2;
  value3.innerHTML = range3;
  value4.innerHTML = range4;

  let resultValues = "rgba(" + range1 + ", " + range2 + ", " + range3 + ", " + range4 + ")"

  result.style.background = resultValues
  txt.innerHTML = resultValues

}

function rgbaDefFunc() {

  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')

  rgbaDef(values[0], values[1], values[2], values[3], ranges[0].value, ranges[1].value, ranges[2].value, ranges[3].value, result, txt)

}

// -----------------------------------------------------------------------
// DISPLAY DYNAMIC VALUES
// -----------------------------------------------------------------------

// RGB
rgbDefFunc()

// RGBA
rgbaDefFunc()

// Check opacity
function checkOpacity() {
  // Get the checkbox
  let checkBox = document.getElementById("checkOpacity")
  // Get the opacity container
  let opacitySelector = document.getElementById("opacitySelector")
  // Get opacity range
  let opacityRange = document.querySelector('#opacitySelector input')
  // If the checkbox is checked
  if (checkBox.checked == true) {
    // Show opacity range
    opacitySelector.style.display = "flex";
    // Apply rgba function
    rgbaDefFunc()
  } else {
    // Hide opacity range
    opacitySelector.style.display = "none";
    // Reinitialize opacity value
    opacityRange.value = 1
    // Apply rgb function
    rgbDefFunc()
  }
}
checkOpacity()

// Display values
function showValue(value) {
  checkOpacity()
}
