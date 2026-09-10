# 바램 (BAREM) 공식 웹사이트

Next.js 15 (App Router) + Tailwind CSS 정적 사이트입니다.  
Google Play 조직 인증·App Store/Play 개인정보처리방침 URL·랜딩 페이지로 사용합니다.

**공개 URL (배포 후):** https://hoon-chang.github.io/barem-site/

---

## 설정 수정

편집 가능한 값은 모두 [`site.config.ts`](./site.config.ts)에 있습니다.

| 항목 | 필드 |
|------|------|
| 사이트 URL / basePath | `siteUrl`, `basePath` |
| Google Search Console | `googleSiteVerification` |
| 대표자·사업자번호 | `business.*` |
| 이메일 | `contact.email` |
| 스토어 링크 | `stores.appStoreUrl`, `stores.playStoreUrl` |

사업자등록번호 등 플레이스홀더(`000-00-00000`)는 실제 값으로 교체하세요.

---

## 로컬 실행

```bash
npm install
npm run dev
```

정적 빌드:

```bash
npm run build
# 결과물: out/
```

---

## GitHub Pages 배포 (이 저장소 기본)

Pages 소스: **`main` 브랜치 `/docs` 폴더**.

```bash
npm run deploy
git add docs && git commit -m "Deploy site" && git push origin main
```

1. 저장소 **Settings → Pages → Deploy from a branch**
2. Branch: `main` / folder: `/docs`
3. 프로젝트 사이트이므로 `site.config.ts`의 `basePath`는 `"/barem-site"` 입니다.
4. Google Search Console HTML 파일 인증: `public/google*.html` → 빌드 시 `docs/`에 복사됩니다.
5. 커스텀 도메인을 쓰면 `basePath`를 `""`로 바꾸고 `siteUrl`을 도메인으로 맞춘 뒤 다시 배포하세요.

---

## 다른 호스팅

### Vercel

1. `site.config.ts`에서 `basePath: ""`, `siteUrl`을 Vercel 도메인으로 변경
2. Import Git repository → Framework: Next.js → Deploy  
   (`output: "export"`이므로 정적 산출물로 배포됩니다)

### Cloudflare Pages

1. `basePath: ""`로 변경
2. Build command: `npm run build`
3. Output directory: `out`

---

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 랜딩 (기능·보안·스토어 CTA) |
| `/privacy/` | 개인정보처리방침 (KO + EN 헤딩) |
| `/terms/` | 이용약관 |
| `/robots.txt` | 크롤러 허용 |
| `/sitemap.xml` | 사이트맵 |

문의: skywing090809@gmail.com
