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
function toggleNav() {
  navMobBox == null ? void 0 : navMobBox.classList.toggle("is-visible");
  body == null ? void 0 : body.classList.toggle("no-scroll");
}
burgerBtn == null ? void 0 : burgerBtn.addEventListener("click", toggleNav);
navBtnClose == null ? void 0 : navBtnClose.addEventListener("click", toggleNav);
document.addEventListener("DOMContentLoaded", () => {
  const questionsTitles = document.querySelectorAll(".questions-title");
  questionsTitles.forEach((title) => {
    title.addEventListener("click", function() {
      const content = this.nextElementSibling;
      if (content) {
        content.style.display = content.style.display === "block" ? "none" : "block";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const baseDir = window.location.pathname.replace(/\/[^\/]*$/, "");
  const currentPath = window.location.pathname;
  const homeItems = document.querySelectorAll(".home");
  const logo = document.querySelector(".logo-link");
  const logoImg = document.querySelector(".logo");
  if (currentPath === `${baseDir}/` || currentPath === `${baseDir}/index.html`) {
    homeItems.forEach((home) => home.style.display = "none");
    if (logo) logo.style.display = "none";
    if (logoImg) logoImg.style.display = "block";
  } else {
    homeItems.forEach((home) => home.style.display = "block");
    if (logo) logo.style.display = "block";
    if (logoImg) logoImg.style.display = "none";
  }
  const navLinks = document.querySelectorAll(".nav-link-mob, .nav-link");
  navLinks.forEach((link) => {
    let linkPath = link.getAttribute("href");
    if (linkPath) {
      linkPath = `${baseDir}${linkPath.replace("./", "/")}`;
    }
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
const facadeElement = document.getElementById("youtube-facade");
if (facadeElement) {
  facadeElement.addEventListener("click", function() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/5fCLvxY1IO0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    this.innerHTML = "";
    this.appendChild(iframe);
  });
}
