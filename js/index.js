// -----------------------------------------------------------------------
// RGB
// -----------------------------------------------------------------------

function rgbDef(value1, value2, value3, range1, range2, range3, result, txt) {

  value1.innerHTML = range1;
  value2.innerHTML = range2;
  value3.innerHTML = range3;

  result.style.background = "rgb(" + range1 + ", " + range2 + ", " + range3 + ")";
  txt.innerHTML = "rgb(" + range1 + ", " + range2 + ", " + range3 + ")";
}

function rgbDefFunc() {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')
  rgbDef(values[0], values[1], values[2], ranges[0].value, ranges[1].value, ranges[2].value, result, txt)
}
 
function rgbReset(range1, range2, range3, value1, value2, value3, result, txt) {
  range1.value = '100'
  range2.value = '100'
  range3.value = '255'
  value1.innerHTML = '100'
  value2.innerHTML = '100'
  value3.innerHTML = '255'
  result.style.background = "rgb(100, 100, 255)"
  txt.innerHTML = "rgb(100, 100, 255)"
}

function rgbResetFunc() {
  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')
  rgbReset(ranges[0],ranges[1],ranges[2],values[0],values[1],values[2],result,txt)
}

// -----------------------------------------------------------------------
// RGBA
// -----------------------------------------------------------------------

function rgbaDef(value1, value2, value3, value4, range1, range2, range3, range4,  result, txt) {

  value1.innerHTML = range1;
  value2.innerHTML = range2;
  value3.innerHTML = range3;
  value4.innerHTML = range4;
  
  result.style.background = "rgba(" + range1 + ", " + range2 + ", " + range3 + ", " + range4 + ")";
  txt.innerHTML = "rgba(" + range1 + ", " + range2 + ", " + range3 + ", " + range4 + ")";

}

function rgbaDefFunc() {

  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')
  rgbaDef(values[0], values[1], values[2], values[3], ranges[0].value, ranges[1].value, ranges[2].value, ranges[3].value, result, txt)

}

function rgbaReset(range1, range2, range3, range4, value1, value2, value3, value4, result, txt) {

  range1.value = '100'
  range2.value = '100'
  range3.value = '255'
  range4.value = '1'
  value1.innerHTML = '100'
  value2.innerHTML = '100'
  value3.innerHTML = '255'
  value4.innerHTML = '1'
  result.style.background = "rgba(100, 100, 255, 1)"
  txt.innerHTML = "rgba(100, 100, 255, 1)"

}

function rgbaResetFunc() {

  let ranges = document.querySelectorAll(".selector_range")
  let values = document.querySelectorAll(".selector_value")
  let result = document.body
  let txt = document.querySelector('.resultat')
  rgbaReset(ranges[0],ranges[1],ranges[2],ranges[3],values[0],values[1],values[2],values[3],result,txt)

}

// -----------------------------------------------------------------------
// DISPLAY
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

// -----------------------------------------------------------------------
// RESET
// -----------------------------------------------------------------------

function reset() {
  // Get the checkbox
  let checkBox = document.getElementById("checkOpacity")  
  // If the checkbox is checked
  if (checkBox.checked == true) {
    rgbaResetFunc()
  } else {
    rgbResetFunc()
  }
}

