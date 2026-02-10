//  STEP 1: we select sliders from the DOM
 const redSlider = document.getElementById('redRange');
 const greenSlider = document.getElementById('greenRange');
 const blueSlider = document.getElementById('blueRange');

 // STEP 2: Create a function – change the page color.
function changeBackgroundColor() {

     const r = redSlider.value;
     const g = greenSlider.value;
     const b = blueSlider.value;
     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   }

// STEP 3: add Event listener
  redSlider.addEventListener('input', changeBackgroundColor);
  greenSlider.addEventListener('input', changeBackgroundColor);
  blueSlider.addEventListener('input', changeBackgroundColor);