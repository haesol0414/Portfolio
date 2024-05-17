// 구현 계획
// 1. 모든 section 요소들과 메뉴 아이템들을 가져옴
// 2. IntersectionObserver를 사용해서 모든 section들을 관찰
// 3. 보여지는 section에 해당하는 메뉴 아이템을 활성화
// 보여지는 section? : 만약 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션(가장 상위의 섹션)을 우선시 함
// 마지막에 footer(contact)가 완전히 보인다면 certificate가 아닌 contact 활성화

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#projects',
  '#certificate',
  '#contact',
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false); // 현재 섹션들이 보여지고있는지 없는지를 간직하는 배열
let activeNavItem = navItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
};
// 관찰중인 section에 변화가 생기면 observerCallback 함수 자동 호출되며 변경이 발생한 다수의 entries가 전달
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne; // flag 변수, true or false 값이 담김

  entries.forEach((entry) => {
    // 엔트리가 몇번째 인덱스에 있는지 찾아서 visibleSections update
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    // contact가 다보이면 contact 메뉴에 focus, 세가지 조건이 모두 true여야 selectLastOne변수가 true가 됨
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });

  const currentNavIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);

  selectNavItem(currentNavIndex);
}

function findFirstIntersecting(intersections) {
  const firstTrueIndex = intersections.indexOf(true);

  return firstTrueIndex >= 0 ? firstTrueIndex : 0;
}

function selectNavItem(currentNavIndex) {
  const currentNavItem = navItems[currentNavIndex];

  if (!currentNavItem) {
    return;
  }
  activeNavItem.classList.remove('active');
  activeNavItem = currentNavItem;
  activeNavItem.classList.add('active');
}
