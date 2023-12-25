// 검색창 관련
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 뱃지 관련
const badgeEl = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //   badgeEl.style.display = "none";
      gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });
    } else {
      //   badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });
    }
  }, 300)
);
