window.addEventListener("load", function () {
  let params = new URL(document.location).searchParams;
  let splash = params.get("splashColor");
  let hexRegexWithouSharp = /^[0-9A-F]{6}$/i;

  if (hexRegexWithouSharp.test(splash)) {
    let body = document.querySelector("body");
    let indeterminateAfter = document.querySelector(".indeterminate:after");
    let indeterminateBefore = document.querySelector(".indeterminate:before");
    body.style.backgroundColor = "#" + splash;
    indeterminateAfter.style.backgroundColor = "#" + splash;
    indeterminateBefore.style.backgroundColor = "#" + splash;
  }
});
