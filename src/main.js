const header = document.querySelector(".header");
// 헤더의 높이 측정
// Rect = 사각형 (모서리 좌표, 너비, 높이 확인 가능)
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;
// 또는 header.offsetHeight 사용 가능 (단, 소수점으로 나오지 X)

document.addEventListener("scroll", () => {
  // 스크롤 되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링
  //   console.log(window.scrollY);

  if (window.scrollY > headerHeight) {
    // header 태그 class에 header--other 클래스를 추가
    header.classList.add("header--other");
  } else {
    header.classList.remove("header--other");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
