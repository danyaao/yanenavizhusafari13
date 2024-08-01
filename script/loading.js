window.addEventListener("load", function (ev) {
  let loading = document.querySelector("#icon");
  let bottom = document.querySelector("#bottom");

  _init();

  _flutter.loader
    .loadEntrypoint({})
    .then(function (engineInitializer) {
      return engineInitializer.initializeEngine();
    })
    .then(function (appRunner) {
      return appRunner.runApp().then(function () {
        bottom.remove();
      });
    });
});

function _init() {
  handleInitialSearch();

  let search = getLocalSearch();
  if (search === null || search === undefined) {
    search = document.location.search;
  }
  let iconUrl = getQueryParam(search, "iconUrl");

  if (iconUrl) {
    changeFavIcon(iconUrl);
  }
}
