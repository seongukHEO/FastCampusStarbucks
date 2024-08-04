document.addEventListener("DOMContentLoaded", () => {
  // 라우트를 정의합니다.
  const routes = {
    "/": "Home Page",
    "/about": "About Page",
    "/contact": "Contact Page",
  };

  // 라우트를 렌더링하는 함수입니다.
  const render = (route) => {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = routes[route] || "404 Not Found";
  };

  // 브라우저의 뒤로 가기 및 앞으로 가기 버튼을 처리합니다.
  window.onpopstate = () => {
    render(window.location.pathname);
  };

  // 링크 클릭을 처리하는 함수입니다.
  const onLinkClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    history.pushState(null, null, href);
    render(href);
  };

  // 모든 링크에 클릭 이벤트를 추가합니다.
  document.querySelectorAll("a[data-link]").forEach((link) => {
    link.addEventListener("click", onLinkClick);
  });

  // 현재 경로를 렌더링합니다.
  render(window.location.pathname);
});
