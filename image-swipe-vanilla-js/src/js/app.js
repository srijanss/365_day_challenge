import "bootstrap";
import "../sass/main.scss";
import "./custom";

const _C = document.querySelector(".img__container"),
  N = _C.children.length;

let x0 = null;
let i = 0;

const unify = (e) => {
  return e.changedTouches ? e.changedTouches[0] : e;
};

const lock = (e) => {
  x0 = unify(e).clientX;
  _C.classList.toggle("smooth", false);
};
const move = (e) => {
  if (x0 || x0 === 0) {
    let dx = unify(e).clientX - x0,
      s = Math.sign(dx);
    if ((i > 0 || s < 0) && (i < N - 1 || s > 0)) {
      _C.style.setProperty("--i", (i -= s));
    }
    _C.style.setProperty("--tx", "0px");
    _C.classList.toggle("smooth", true);
    x0 = null;
  }
};
const drag = (e) => {
  e.preventDefault();
  if (x0 || x0 === 0) {
    _C.style.setProperty("--tx", `${Math.round(unify(e).clientX - x0)}px`);
  }
};

_C.style.setProperty("--n", N);

_C.addEventListener("mousedown", lock, false);
_C.addEventListener("touchstart", lock, false);

_C.addEventListener("mousemove", drag, false);
_C.addEventListener("touchmove", drag, false);

_C.addEventListener("mouseup", move, false);
_C.addEventListener("touchend", move, false);
