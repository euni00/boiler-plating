module.exports = {
  types: [
    { value: '✨ Feat', name: '✨ Feat: 새로운 기능 추가' },
    { value: '🎯 Fix', name: '🎯 Fix: 코드 수정' },
    { value: '🎨 Design', name: '🎨 Design: UI 디자인 변경' },
    { value: '♻️ Refactor', name: '♻️ Refactor: 리팩토링' },
    { value: '📋 Docs', name: '📋 Docs: 문서 수정' },
    { value: '✅ Test', name: '✅ Test: 테스트 추가/수정' },
    { value: '🚀 Deploy', name: '🚀 Deploy: 배포 관련 작업' },
    { value: '📝 Rename', name: '📝 Rename: 이름 변경' },
    { value: '🔥 Remove', name: '🔥 Remove: 삭제' },
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
