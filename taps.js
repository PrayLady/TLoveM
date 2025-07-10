document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 모든 탭 버튼에서 active 제거
      tabButtons.forEach(btn => btn.classList.remove('active'));

      // 클릭한 버튼에 active 추가
      button.classList.add('active');

      const targetId = button.dataset.tab;

      // 모든 탭 콘텐츠에서 active 제거
      tabContents.forEach(content => content.classList.remove('active'));

      // 선택한 탭 콘텐츠에 active 추가
      document.getElementById(targetId).classList.add('active');
    });
  });
});
