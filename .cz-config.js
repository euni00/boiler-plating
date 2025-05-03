module.exports = {
  types: [
    { value: '✨ Feat', name: '✨ Feat: 새로운 기능 추가' },
    { value: '🚧 Progress', name: '🚧 Progress: 작업 진행 중인 코드' },
    { value: '🎯 Fix', name: '🎯 Fix: 코드 수정' },
    { value: '🐛 Bug', name: '🐛 Bug: 버그 수정' },
    { value: '🎨 Design', name: '🎨 Design: CSS 등 사용자 UI 디자인 변경' },
    { value: '💄 Style', name: '💄 Style: 코드 포맷 변경' },
    { value: '♻️ Refactor', name: '♻️ Refactor: 프로덕션 코드 리팩토링' },
    { value: '💡 Comment', name: '💡 Comment: 필요한 주석 추가 및 변경' },
    { value: '📋 Docs', name: '📋 Docs: 문서 수정(README 포함)' },
    { value: '✅ Test', name: '✅ Test: 테스트 추가/리팩토링' },
    { value: '🔖 Chore', name: '🔖 Chore: 빌드 설정 또는 패키지 매니저 설정' },
    { value: '📝 Rename', name: '📝 Rename: 파일/폴더명 수정 또는 이동' },
    { value: '🔥 Remove', name: '🔥 Remove: 사용하지 않는 파일/폴더 삭제' },
    { value: '📌 Init', name: '📌 Init: 초기 프로젝트 생성' },
    { value: '🚑 BREAKING CHANGE', name: '🚑 BREAKING CHANGE: 주요 API/로직 변경' },
    { value: '🔔 Merge Request', name: '🔔 Merge Request: 브랜치 병합, 충돌 해결 등' },
  ],
  messages: {
    type: '🧩 커밋 타입을 선택하세요:',
    subject: '📝 커밋 메시지를 입력하세요:\n',
  },
  questions: ['type', 'subject'],
  format: ({ type, subject }) => {
    if (!subject || subject.trim() === '') {
      throw new Error('❗ 커밋 메시지를 반드시 입력해야 합니다.');
    }

    return `${type}: ${subject}`;
  },
  subjectLimit: 100,
  scopes: [],
  skipQuestions: ['scope'],
  allowCustomScopes: false,
  allowBreakingChanges: false,
};
