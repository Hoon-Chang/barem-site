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

## 스크린샷 (홈페이지 기준 포맷)

기능이 바뀌어 스크린샷을 갈아끼울 때도 **지금 라이브와 같은 형태**를 유지합니다.

| 항목 | 규칙 |
|------|------|
| 파일 | `public/screenshots/01_home.png` … `07_profile.png` |
| 내용 | **앱 UI만** (상태바·Dynamic Island 포함). 기기 베젤·스토어 헤드라인·면책 문구 **없음** |
| 크기 | **414 × 900** PNG |
| 기기 프레임 | `PhoneShot` CSS 베젤(`border-[#1a2a22]`, 모서리 ≈프레임 너비의 12% `cqw`)이 그림. PNG에 베젤을 넣지 않음 |
| 원본 | 형제 저장소 `barem/store_assets/screenshots/raw/ios/` (1320×2868) |

```bash
# barem에서 raw → 사이트용 414×900 내보내기
cd ../barem
./tool/export_site_screenshots.sh
# → barem-site/public/screenshots/

cd ../barem-site
npm run deploy
git add public/screenshots docs && git commit && git push
```

**쓰지 말 것:** 스토어 마케팅 합성본(`screenshots/ios/`), PNG에 베젤을 구운 뒤 CSS 프레임까지 쓰는 이중 프레임.

에이전트용 규칙: [`.cursor/rules/website-screenshots.mdc`](./.cursor/rules/website-screenshots.mdc)

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
