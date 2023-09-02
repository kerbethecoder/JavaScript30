const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

//bubbling - goes nest up
//capture - goes nest down
//stopPropagation() - stops the bubbling or capturing

divs.forEach((div) => div.addEventListener('click', logText));
