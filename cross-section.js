/* button DOM bindings */

const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');

/* image DOM bindings */


function toggleOverview() {
    const overview = document.getElementById('overview')
    const internal = document.getElementById('internal')
    const surface = document.getElementById('surface')
    let displaySetting = overview.style.display;
    if (displaySetting == 'block') {
      overview.style.display = 'none'
    }
    else {
      overview.style.display = 'block';
      internal.style.display = 'none';
      surface.style.display = 'none';
    }
  }

  function toggleInternal() {
    const overview = document.getElementById('overview')
    const internal = document.getElementById('internal')
    const surface = document.getElementById('surface')
    let displaySetting = internal.style.display;
    if (displaySetting == 'block') {
      internal.style.display = 'none';
    }
    else {

      internal.style.display = 'block';
      overview.style.display = 'none';
      surface.style.display = 'none';
    }
  }

  function toggleSurface() {
    const overview = document.getElementById('overview') 
    const internal = document.getElementById('internal')
    const surface = document.getElementById('surface')
    let displaySetting = surface.style.display;
    if (displaySetting == 'block') {
      surface.style.display = 'none';
    }
    else {
      surface.style.display = 'block';
      overview.style.display = 'none';
      internal.style.display = 'none';
    }
  }
  buttonOne.onclick = toggleOverview;
  buttonTwo.onclick = toggleInternal;
  buttonThree.onclick = toggleSurface;