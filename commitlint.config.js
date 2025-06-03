module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: 'Değişiklik türünü seçin:',
        enum: {
          feat: {
            description: 'Yeni bir özellik',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'Bir hata düzeltmesi',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Dokümantasyon değişiklikleri',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: 'Kod davranışını değiştirmeyen stil değişiklikleri',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'Kod davranışını değiştirmeyen kod yeniden düzenlemeleri',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'Performans iyileştirmeleri',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Test ekleme veya düzenleme',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: 'Derleme sistemini veya harici bağımlılıkları etkileyen değişiklikler',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: 'CI yapılandırmasını değiştiren değişiklikler',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: 'Kod değişikliği içermeyen güncellemeler',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Önceki bir commit\'i geri alır',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'Bu değişikliğin kapsamı nedir (bileşen veya dosya adı)'
      },
      subject: {
        description: 'Değişikliği kısaca açıklayın'
      },
      body: {
        description: 'Daha detaylı bir açıklama sağlayın'
      },
      isBreaking: {
        description: 'Breaking change içeriyor mu?'
      },
      breakingBody: {
        description: 'Breaking change commit body'
      },
      breaking: {
        description: 'Breaking changes açıklaması'
      },
      isIssueAffected: {
        description: 'Bu değişiklik açık bir issue\'yu etkiliyor mu?'
      },
      issuesBody: {
        description: 'Issue referansını içeren commit body'
      },
      issues: {
        description: 'Issue referansı ekleme (ör. "fix #123", "re #123")'
      }
    }
  }
}; 