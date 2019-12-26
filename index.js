const typer1El = document.querySelector('#typer-1');
const typer1Content = typer1El.dataset.content;

const typeTillDrop = (typeFn, txt) => {
  if (txt === '') {
    selfTyper1El.style.display = 'block';
    return;
  }

  typeFn(txt.slice(0, 1));
  setTimeout(() => {
    typeTillDrop(typeFn, txt.slice(1));
  }, 100);
};

const doType = () => {
  const doType1 = (letter) => typer1El.innerHTML = typer1El.innerHTML + letter;
  typeTillDrop(doType1, typer1Content);
};

document.addEventListener('DOMContentLoaded', doType);