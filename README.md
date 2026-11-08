# 정보 수업 나눔 키트 (info-facilitation-kit)

> **한 장씩 들고 와서, 서른 장 들고 가기**
> 고등학교 정보교과 실습 연수를 마무리하는 120분 퍼실리테이션 활동 키트

단원별 실습에서 얻은 아이디어로 선생님 한 분 한 분이 부담 없이 ‘우리 교실에 바로 쓸 산출물 1개’를 만들고,
30명이 만든 30개의 산출물을 패들렛 갤러리로 나누며 연수를 마무리합니다.

🌐 **홈페이지**: https://nabilera1.github.io/info-facilitation-kit/

## 구성

| 페이지 | 내용 |
|---|---|
| [`index.html`](index.html) | 연수 소개, 120분 흐름, 준비물 체크리스트 |
| [`guide.html`](guide.html) | 퍼실리테이션 원칙, 주교사·보조교사 역할, 단계별 진행 멘트, 패들렛 설정, 돌발 상황 대처 |
| [`activities.html`](activities.html) | 단계별로 골라 쓰는 활동 카드 12 (필터 기능) |
| [`prompts.html`](prompts.html) | 바이브 코딩·AI 학생 리허설·리믹스·활동지 프롬프트, 아이디어 카드 20 |
| [`tools.html`](tools.html) | 화면용 활동 타이머, 모둠 편성, 발표자 뽑기 |
| [`worksheets.html`](worksheets.html) | 인쇄용 활동지 3종 (한 장 설계, 갤러리 피드백, 실천 약속 카드) |
| [`slides.html`](slides.html) | 브라우저에서 바로 띄우는 진행 슬라이드 14장 (← → 키, F 전체 화면) |

빌드 도구 없이 HTML, CSS, JavaScript만으로 만들어 GitHub Pages에 그대로 올리면 동작합니다.

```
info-facilitation-kit/
├── index.html
├── guide.html
├── activities.html
├── prompts.html
├── tools.html
├── worksheets.html
├── slides.html
├── assets/
│   ├── css/style.css     # 공통 스타일 (라이트/다크 모드, 인쇄)
│   └── js/main.js        # 공통 헤더·푸터, 메뉴, 복사 버튼
├── .nojekyll
└── README.md
```

## GitHub Pages로 배포하기

1. GitHub에서 **New repository** → 이름 `info-facilitation-kit` → Public → Create
2. **Add file → Upload files**로 압축을 푼 폴더 안의 파일과 폴더를 모두 끌어다 놓고 **Commit changes**
   (`.nojekyll`처럼 점으로 시작하는 파일이 보이지 않으면 없어도 동작합니다)
3. **Settings → Pages → Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)` → **Save**
4. 1~2분 뒤 `https://nabilera1.github.io/info-facilitation-kit/` 에서 확인

명령줄을 쓴다면:

```bash
cd info-facilitation-kit
git init && git add . && git commit -m "정보 수업 나눔 키트 첫 배포"
git branch -M main
git remote add origin https://github.com/nabilera1/info-facilitation-kit.git
git push -u origin main
```

## 내 연수에 맞게 고치기

- **메뉴, 저자, 저장소 주소**: `assets/js/main.js` 맨 위의 `SITE`, `NAV`
- **활동 카드**: `activities.html` 안의 `ACTIVITIES` 배열
- **아이디어 카드**: `prompts.html` 안의 `IDEAS` 객체
- **타이머 단계 버튼**: `tools.html` 안의 `PRESETS` 배열
- **슬라이드**: `slides.html`의 `<section class="slide">` 블록을 복사하거나 고치기
- **색상**: `assets/css/style.css` 맨 위의 `:root` 변수 (`--brand` 등)

## 운영 팁

- 생성형 AI 서비스 로그인은 연수 전에 미리 안내해 주세요.
- AI에 학생 개인정보를 입력하지 않도록 안내하고, 학생 수업에 쓸 때는 서비스 이용 연령과 학교 정책을 확인하세요.
- 연수가 끝나면 패들렛을 PDF로 내보내 공동 자료집으로 공유하세요.

## 라이선스

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko): 출처를 밝히고 비영리 목적으로 자유롭게 고쳐 쓰고 나눌 수 있습니다.

만든 사람: 김동균 ([@nabilera1](https://github.com/nabilera1))
