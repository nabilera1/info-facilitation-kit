/* =========================================================
   공통 스크립트: 헤더/푸터, 테마 전환, 복사 버튼
   메뉴를 바꾸려면 아래 NAV 배열만 수정하면 됩니다.
   ========================================================= */
const SITE = {
  title: "정보 수업 나눔 키트",
  repo: "https://github.com/nabilera1/info-facilitation-kit",
  author: "김동균",
};

const NAV = [
  { href: "index.html", label: "홈" },
  { href: "guide.html", label: "진행 가이드" },
  { href: "activities.html", label: "활동 카드" },
  { href: "prompts.html", label: "AI 프롬프트" },
  { href: "tools.html", label: "진행 도구" },
  { href: "worksheets.html", label: "활동지" },
  { href: "slides.html", label: "슬라이드" },
];

(function theme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}
})();

function toggleTheme() {
  const root = document.documentElement;
  const isDark =
    root.getAttribute("data-theme") === "dark" ||
    (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
}

function renderChrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="index.html"><span class="dot">정</span>${SITE.title}</a>
        <button class="icon-btn menu-btn" aria-label="메뉴 열기" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
        <ul class="nav-links">
          ${NAV.map(n => `<li><a href="${n.href}" ${n.href === here ? 'aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
        </ul>
        <button class="icon-btn" aria-label="다크 모드 전환" onclick="toggleTheme()">🌓</button>
      </div>`;
  }
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <span>© ${new Date().getFullYear()} ${SITE.author} · 고등학교 정보교과 실습 연수 마무리 퍼실리테이션 키트</span>
        <span><a href="${SITE.repo}" target="_blank" rel="noopener">GitHub 저장소</a> · CC BY-NC-SA 4.0</span>
      </div>`;
  }
}

function enableCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const target = document.getElementById(btn.dataset.copy);
      const text = target ? target.innerText : "";
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand("copy"); ta.remove();
      }
      const old = btn.textContent;
      btn.textContent = "복사됨 ✓";
      setTimeout(() => (btn.textContent = old), 1400);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  enableCopyButtons();
});
