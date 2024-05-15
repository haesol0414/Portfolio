const header = document.querySelector(".header");
// 헤더의 높이 측정
// Rect = 사각형 (모서리 좌표, 너비, 높이 확인 가능)
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener("scroll", () => {
  // 스크롤 되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링
  console.log(window.scrollY);

  if (window.scrollY > headerHeight) {
    // header 태그 class에 header--other 클래스를 추가
    header.classList.add("header--other");
  } else {
    header.classList.remove("header--other");
  }
});
