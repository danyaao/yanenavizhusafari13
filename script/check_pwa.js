function isPwaInstalled() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
