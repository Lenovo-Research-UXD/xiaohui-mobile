const baseSize = 37.5;

function setRem() {
  const scale = document.documentElement.clientWidth / 375;
  console.log({ scale });
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 4) + 'px';
}

setRem();

window.onresize = function () {
  setRem();
};
