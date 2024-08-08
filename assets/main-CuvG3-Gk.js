(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const burgerBtn = document.querySelector(".burger-btn");
const navMobBox = document.querySelector(".nav-mob");
const navBtnClose = document.querySelector(".nav-btn-close");
const body = document.querySelector("body");
burgerBtn == null ? void 0 : burgerBtn.addEventListener("click", toggleNav);
navBtnClose == null ? void 0 : navBtnClose.addEventListener("click", toggleNav);
function toggleNav() {
  console.log("poop");
  navMobBox == null ? void 0 : navMobBox.classList.toggle("is-visible");
  body == null ? void 0 : body.classList.toggle("no-scroll");
}
document.addEventListener("DOMContentLoaded", () => {
  const questionsTitles = document.querySelectorAll(".questions-title");
  questionsTitles.forEach((title) => {
    title.addEventListener("click", function() {
      const content = this.nextElementSibling;
      if (content) {
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      }
    });
  });
});
