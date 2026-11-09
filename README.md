# LeoLog

프론트엔드 개발자 Leo의 TIL 블로그. 기록으로 기억합니다.

배포 주소: <https://leokang94.github.io>

## 스택

- **Astro 7** — 정적 사이트 생성
- **MDX** — Markdown 확장 (컴포넌트 삽입 가능)
- **Pagefind** — 빌드 후 정적 풀텍스트 검색
- **giscus** — GitHub Discussions 기반 댓글
- **Google Analytics 4** — 방문 통계 (관리자 전용, 화면에 조회수는 표시하지 않음)
- **GitHub Pages** — 호스팅

## 로컬 개발

```bash
pnpm dev      # 개발 서버 (http://localhost:4321)
pnpm build    # 타입 체크 → 빌드 → Pagefind 인덱싱
pnpm preview  # 빌드 결과물 로컬 미리보기
```

> 검색(`/search/`)은 `pnpm build` 후 `pnpm preview`에서 동작합니다.
> `pnpm dev`에서는 대신 안내 문구가 표시됩니다.

## 글 작성

### 경로

```
src/content/posts/<년도>/<slug>.md
src/content/posts/<년도>/<slug>.mdx   # 컴포넌트 사용 시
```

### 프론트매터

| 필드          | 타입       | 필수 | 설명                                |
| ------------- | ---------- | ---- | ----------------------------------- |
| `title`       | `string`   | ✓    | 글 제목                             |
| `description` | `string`   | ✓    | 요약 (RSS·OG에 사용)                |
| `publishedAt` | `date`     | ✓    | 발행일 (`YYYY-MM-DD`)               |
| `updatedAt`   | `date`     |      | 수정일                              |
| `tags`        | `string[]` |      | 태그 목록 (기본값: `[]`)            |
| `series`      | `string`   |      | 시리즈 이름                         |
| `draft`       | `boolean`  |      | `true`이면 `pnpm dev`에서만 표시 (기본값: `false`) |

```yaml
---
title: 'CSS :has() 선택자'
description: '부모 선택이 가능해졌다.'
publishedAt: 2025-04-10
tags: ['CSS', '선택자']
draft: false
---
```

## 에셋 재생성

```bash
# 웹폰트 서브셋 재생성 (uv 필요)
uv run scripts/build-fonts.py

# favicon.ico · apple-touch-icon.png · og.png 재생성 (원본: public/favicon.svg)
node scripts/build-icons.mjs
```

## 외부 서비스 설정

### 1. GitHub Pages

저장소 **Settings → Pages → Build and deployment** 에서 Source를 **GitHub Actions** 로 변경합니다.

### 2. giscus (댓글)

설정 완료. 저장소 Discussions 활성화, giscus app 설치, 기본 `Announcements` category 연결까지 되어 있습니다.
category를 바꾸려면 `src/site.config.ts`의 `GISCUS.category` / `categoryId`를 수정합니다. ID는 아래로 조회합니다.

```bash
gh api graphql -f query='{ repository(owner:"leokang94", name:"leokang94.github.io"){ discussionCategories(first:20){ nodes { id name } } } }'
```

### 3. Google Analytics 4

설정 완료. GA 계정 `leokang94`의 속성 `LeoLog`(563190780), 웹 스트림 측정 ID `G-ZK78NW75WC`가 `src/site.config.ts`의 `GA_MEASUREMENT_ID`에 들어 있습니다. gtag는 production 빌드에서만 로드되어 `pnpm dev` 방문은 집계되지 않습니다.
