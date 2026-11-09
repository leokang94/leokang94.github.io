export const SITE = {
  title: 'LeoLog',
  description: '기록으로 기억하기. 프론트엔드 개발자 Leo의 TIL',
  author: '강태훈 (Leo)',
  locale: 'ko_KR',
  lang: 'ko',
  github: 'https://github.com/leokang94',
  postsPerPage: 20,
} as const;

/**
 * giscus: https://giscus.app
 * Uses the default announcement-type category, so only maintainers and the
 * giscus app can open new discussions; readers can still comment.
 */
export const GISCUS = {
  repo: 'leokang94/leokang94.github.io',
  repoId: 'R_kgDOHI1pWg',
  category: 'Announcements',
  categoryId: 'DIC_kwDOHI1pWs4DKqqO',
} as const;

/** GA4 measurement ID: property "LeoLog" (563190780), web stream 16298286131. */
export const GA_MEASUREMENT_ID = 'G-ZK78NW75WC';
