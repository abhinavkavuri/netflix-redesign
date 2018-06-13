var spans = document.querySelectorAll('span');
var ready = false;
var replay = function replay() {
  if (ready) {
    setTimeout(function () {
      spans.forEach(function (s) {
        return s.classList.toggle('play');
      });
      ready = false;
      setTimeout(function () {
        return spans.forEach(function (s) {
          return s.classList.toggle('play');
        });
      }, 0);
    }, 2000);
  }
  if (!ready) {
    ready = true;
  }
};
spans[spans.length - 1].addEventListener('animationend', replay);