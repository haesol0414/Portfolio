'use strict';

// Project 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project'); // querySelectorAll: project 클래스를 가진 모든 요소를 배열로 반환
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const selectedCategory = event.target.dataset.category; // 클릭된 all, full-stack 등 문자열 담기
  if (selectedCategory === null) {
    return;
  }

  handleActiveSelection(event.target);
  filterProjects(selectedCategory);
});

// Active 설정 함수
const handleActiveSelection = (newTarget) => {
  const activedTarget = document.querySelector('.category--selected'); // 원래 선택되어있던 (category--selected 클래스를 가진) 요소 담기

  activedTarget.classList.remove('category--selected'); // 클릭이 발생하면 원래 선택되어있던 메뉴에서 제거
  newTarget.classList.add('category--selected'); // 새로 클릭된 메뉴(newTarget)에 category--selected 추가};
};

// 프로젝트 필터링 함수
const filterProjects = (selectedCategory) => {
  projects.forEach((project) => {
    if (
      selectedCategory === 'all' ||
      selectedCategory === project.dataset.type
    ) {
      project.style.display = 'block'; // selectedCategory가 all 이거나, 클릭된 메뉴(selectedCategory)와 일치하는 data-type을 가진 프로젝트들은 화면상에 보이게
    } else {
      project.style.display = 'none'; // 그렇지 않은 프로젝트들은 숨기기
    }
  });

  // animation
  projectsContainer.classList.add('anime-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anime-out');
  }, 250);
};
