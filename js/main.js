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

// 중간 이미지 영역
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// notice swiper
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
