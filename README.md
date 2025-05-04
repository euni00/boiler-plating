# 🚀 보일러 플레이팅 프로젝트

## 📝 프로젝트 설명

> 이 프로젝트는 프론트엔드 사이드 프로젝트 및 해커톤을 위한 보일러플레이팅 프로젝트입니다. 생산성과 코드 품질, 개발 흐름의 자동화를 모두 고려해 설계되었습니다.

## 👩🏻‍💻 프로젝트 정보

- **Framework**: Next.js + TypeScript
- **Styling**: SCSS
- **State Management**: Zustand
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Testing**: Cypress(E2E, Unit)
- **CI**: GitHub Actions

## 📦 프로젝트 폴더 구조

```
.github
.husky
.storybook
cypress
src
├── api
├── app
├── store
├── stories
├── utils
.cz-config.js
.env
.env.production
.eslintrc.js
.gitignore
.prettierignore
.prettierrc
cypress.config.ts
next.config.ts
tsconfig.json
vitest.config.ts
```

## ✅ 프로젝트 초기 세팅

### 1. Next.js + Typescript

타입 안정성을 갖춘 React 프레임워크 환경을 구축했습니다.

### 2. SCSS 설치 및 기본 세팅

BEM 기법과 호환성이 좋은 SCSS를 설치하였습니다.
공통 scss파일을 위해 \_mixins.scss, \_reset.scss, \_variables.scss, globals.scss를 추가하였습니다.

### 3. alias 설정 추가 (icon, type, store, component etc …)

@icon, @type, @store, @component 등을 설정하여 import 경로를 직관적으로 작성할 수 있도록 세팅하였습니다.

### 4. Zustand 설치 및 예시파일 추가

### 5. react-cookie 설치

### 6. util 함수 세팅(session, cookie)

### 7. Axios Instance 생성

### 8. Next.js Proxy 설정 추가 (next.config.ts)

### 9. .eslintrc.js 설정 추가

### 10. .prettierrc, .prettierignore 설정 추가

### 11. Husky + lint-staged

commit 이전 eslint를 검사하고 실패할 경우 바로 commit을 취소할 수 있도록 설정하였습니다.

### 12. commitizen + cz-customizable

npm run commit을 통해 아래 커밋 컨벤션 자동 적용할 수 있도록 설정하였습니다.

### 커밋 컨벤션

| 이모지 | 타입             | 설명                                |
| ------ | ---------------- | ----------------------------------- |
| ✨     | Feat             | 새로운 기능 추가                    |
| 🚧     | Progress         | 작업 진행 중인 코드                 |
| 🎯     | Fix              | 코드 수정                           |
| 🐛     | Bug              | 버그 수정                           |
| 🎨     | Design           | CSS 등 사용자 UI 디자인 변경        |
| 💄     | Style            | 코드 포맷 변경                      |
| ♻️     | Refactor         | 프로덕션 코드 리팩토링              |
| 💡     | Comment          | 필요한 주석 추가 및 변경            |
| 📋     | Docs             | 문서 작성 및 수정 문서(README 포함) |
| ✅     | Test             | 테스트 추가/리팩토링                |
| 🔖     | Chore            | 빌드 설정 또는 패키지 매니저 설정   |
| 📝     | Rename           | 파일/폴더명 수정 또는 이동          |
| 🔥     | Remove           | 사용하지 않는 파일/폴더 삭제        |
| 📌     | Init             | 초기 프로젝트 생성                  |
| 🚑     | !BREAKING CHANGE | 주요 API/로직 변경                  |
| 🔔     | Merge Request    | 브랜치 병합, 충돌 해결 등           |

### 13. Github Action CI 설정 추가

PR 및 push 시 ESLint, TypeScript, Build, Cypress 테스트를 수행할 수 있도록 설정하였습니다. PR 실패할 경우 자동 댓글이 생성됩니다.

### 14. Github Issues 템플릿, PR 템플릿 추가

Issues 템플릿과 PR 템플릿을 통일하기 위해 추가하였습니다. Issues 템플릿은 bug report, feature suggestion으로 나뉘어 있습니다.

### 15. Cypress 설치 및 파일 세팅(E2E, Unit Test)

- TDD 방식으로 개발할 경우 사전에 작성한 Unit Test 코드를 통과할 수 있도록 개발하며 테스트 결과를 즉각적으로 확인할 수 있습니다.
- 전체 workflow를 점검할 수 있을 정도로 개발이 된 경우 E2E Test를 작성하며 점검합니다.
- 개발자가 생각한 최소한의 테스트 코드를 통과한 후 push와 PR이 될 수 있도록 검증합니다.
- Cypress Cloud와 연동하면 테스트결과서를 작성하지 않아도 UI로 테스트 결과를 확인할 수 있습니다. Cypress Cloud 연동 방법은 공식 가이드에 명시되어 있습니다.
- 마지막으로 실제 사용자 입장이 되어 테스트를 할 경우는 QA 시트를 기준으로 테스트를 수행합니다.

```
// 실행
npm run cypress:open

// 테스트
npm run cypress:test
```

### 16. storybook 설치 및 파일 세팅

프로젝트의 컴포넌트를 독립적으로 관리하며 문서화 공수를 최소화할 수 있도록 Storybook을 사용합니다.

```
// 실행
npm run storybook

// 빌드
npm run build-storybook
```

### 17. tsconfig.json 설정 추가 및 작성

**tsconfig.json**

```
"target": "ESNext",                         // 최신 ECMAScript 문법을 사용
"module": "esnext",                         // 모듈 시스템 최신 ES 방식 사용
"esModuleInterop": true,                    // CommonJS 스타일의 모듈도 ES6 방식처럼 import 가능
"moduleResolution": "bundler",              // 모듈 해석 방식: Next.js는 bundler를 권장
"lib": ["dom", "dom.iterable", "esnext"],   // 사용할 라이브러리 (DOM API와 최신 JS 기능 포함)
"allowJs": true,                            // JS 파일도 TypeScript에서 허용
"skipLibCheck": true,                       // node_modules 내부 타입 검사 스킵
"noEmit": true,                             // .js,.ts 파일을 실제로 컴파일해서 출력하지 않음
"resolveJsonModule": true,                  // JSON 파일 import 가능
"isolatedModules": true,                    // 각 파일을 독립적인 모듈로 취급 (Next.js, Babel 같은 환경에서 필요)
"jsx": "preserve",                          // JSX 문법을 그대로 유지 (Next.js는 자체적으로 처리)
"incremental": true,                        // 증분 빌드 정보 저장해서 재빌드 속도 향상
"removeComments": true,                     // JS,TS 파일에서 주석 제거 (출력될 경우)
"strict": true,                             // strict 모드 전체 활성화
"noImplicitAny": true,                      // 타입을 명시하지 않은 any 금지
"strictNullChecks": true,                   // null, undefined에 대해 strict하게 타입 체크
"strictFunctionTypes": true,                // 함수 파라미터 타입이 정확히 일치해야 함
"noImplicitThis": true,                     // this 키워드가 any인 경우 에러
"alwaysStrict": true,                       // 모든 파일에 `"use strict"` 적용
"noUnusedLocals": true,                     // 사용하지 않는 지역 변수는 에러 처리
"noUnusedParameters": true,                 // 사용하지 않는 함수 매개변수는 에러 처리
"noImplicitReturns": true,                  // 함수가 반환값을 명시하지 않으면 에러
"noFallthroughCasesInSwitch": true,         // switch-case 문에서 break문이 없을 경우 에러
"noUncheckedIndexedAccess": true,           // 객체의 인덱스 접근 시 항상 undefined 가능성 체크
"exactOptionalPropertyTypes": true,         // `?`가 붙은 optional property는 명확하게 체크
"forceConsistentCasingInFileNames": true,   // import할 때 대소문자 일관성 강제
```

> 해당 프로젝트는 프론트엔드 프로젝트를 **안정적이고 빠르게** 시작할 수 있기 위해 제작되었습니다. 추후 이 프로젝트를 기반으로 실제 프로젝트를 구축하며 부족한 부분은 점차 보완해 나갈 예정입니다. 코드 리뷰 코멘트와 PR은 언제나 열려있습니다!💪
