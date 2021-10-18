/* button DOM bindings */

const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');

/* image DOM bindings */
const overview = document.getElementById('overview');
const internal = document.getElementById('internal');
const surface = document.getElementById('surface');

/*paragraph DOM bindings*/

const outline = document.getElementById('outline');
const interior = document.getElementById('interior');
const geology = document.getElementById('geology');


/* refactor these three functions into a singular resusable one. Look for more resources on refactoring theory*/
function toggleOverview() {
    
    let displaySetting = overview.style.display;
    if (displaySetting == 'block') {
      overview.style.display = 'block'
      outline.style.display = 'block'
    }
    else {
      overview.style.display = 'block';
      internal.style.display = 'none';
      surface.style.display = 'none';

      outline.style.display= 'block';
      interior.style.display = 'none';
      geology.style.display = 'none';
    }
  }

  function toggleInternal() {
    
    let displaySetting = internal.style.display;
    if (displaySetting == 'block') {
      internal.style.display = 'block';
      interior.style.display = 'block'
    }
    else {

      internal.style.display = 'block';
      overview.style.display = 'none';
      surface.style.display = 'none';

      outline.style.display = 'none';
      interior.style.display = 'block';
      geology.style.display = 'none';
    }
  }

  function toggleSurface() {
    
    let displaySetting = surface.style.display;
    if (displaySetting == 'block') {
      surface.style.display = 'none';
    }
    else {
      surface.style.display = 'block';
      overview.style.display = 'block';
      internal.style.display = 'none';

      outline.style.display = 'none';
      interior.style.display = 'none';
      geology.style.display = 'block';
    }
  }
  buttonOne.onclick = toggleOverview;
  buttonTwo.onclick = toggleInternal;
  buttonThree.onclick = toggleSurface;
