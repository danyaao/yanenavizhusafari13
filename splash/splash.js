function removeSplashFromWeb() {
  var splash = document.getElementById("splash");
  if (splash) {
    splash.remove();
  }
  var splashBranding = document.getElementById("splash-branding");
  if (splashBranding) {
    splashBranding.remove();
  }
  document.body.style.background = "transparent";
}
