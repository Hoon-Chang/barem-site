import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: "개인정보처리방침 (Privacy Policy)",
  description: `${siteConfig.brand.appNameKo} 개인정보처리방침 / Privacy Policy`,
  alternates: { canonical: absoluteUrl("/privacy/") },
  openGraph: {
    title: "개인정보처리방침 | BAREM",
    url: absoluteUrl("/privacy/"),
  },
};

export default function PrivacyPage() {
  const { brand, business, contact, privacy } = siteConfig;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="border-b border-line pb-8">
        <p className="text-sm font-medium tracking-[0.16em] text-muted">
          {brand.legalNameEn}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
          개인정보처리방침
        </h1>
        <p className="mt-1 text-sm text-muted">Privacy Policy</p>
        <p className="mt-4 text-sm text-muted">
          시행일 / Effective date: {privacy.effectiveDateKo} (
          {privacy.effectiveDateEn})
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          본 방침은 모바일 앱 「{brand.appNameKo}」(이하 &quot;바램&quot;)에
          적용됩니다. 바램은 개인 건강·치료 관련 기록을 기기 안에서만
          저장·처리하는 온디바이스 앱이며, 의료기기가 아니며 진단·처방·치료를
          대체하지 않습니다.
        </p>
      </header>

      <div className="prose-legal mt-2">
        <section>
          <h2>
            <span className="en-label">1. General Overview</span>
            총칙
          </h2>
          <p>
            {brand.legalNameEn}(이하 &quot;회사&quot;)은 정보주체의 개인정보 및
            민감 건강 데이터를 소중히 다루며, 「개인정보 보호법」 등 관련 법령과
            Google Play·Apple App Store의 개발자 정책(Health apps / Sensitive
            data)을 준수합니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">2. Collected Data Items</span>
            수집 및 처리하는 개인정보·건강 데이터 항목
          </h2>
          <h3>2.1 개발자 서버로 전송·수집하는 정보</h3>
          <p>
            <strong>없습니다.</strong> 바램은 회원 가입·로그인·클라우드 동기화를
            제공하지 않으며, 검사결과·컨디션·식단·일정·프로필 등 민감 기록을
            외부 서버로 전송하지 않습니다.
          </p>
          <h3>2.2 기기 안에만 저장되는 정보 (로컬)</h3>
          <ul>
            <li>
              사용자가 직접 입력하는 건강 지표: 혈압, 맥박, 혈당, 체온, 체중,
              복약 기록, 건강 메모 등
            </li>
            <li>닉네임, 질환·치료 관련 메모, 병원명 등 프로필</li>
            <li>검사 수치·결과지 OCR 텍스트, 식단·일정</li>
            <li>
              앱 잠금·생체 인증 설정 여부 (생체 원본은 OS가 관리)
            </li>
            <li>사용자가 생성한 PDF 등 내보내기 파일</li>
          </ul>
          <p>
            운영자(개발자)는 위 로컬 기록에 원격으로 접근할 수 없습니다.
          </p>
          <h3>2.3 선택적으로 네트워크를 쓰는 경우</h3>
          <ul>
            <li>
              공공 식품 영양 데이터베이스 다운로드(식단 참고 기능): 공개 데이터
              파일을 HTTPS로 내려받을 수 있으며, 이 과정에서 사용자의
              건강·식단 기록을 서버에 업로드하지 않습니다.
            </li>
            <li>
              기기 식별값·앱 오류 로그·OS 버전은 앱 안정성 개선 목적의
              플랫폼(OS·스토어) 기본 처리에 따를 수 있습니다. 회사 서버로 건강
              기록을 축적하지 않습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="en-label">3. Purposes of Processing</span>
            개인정보의 수집 및 이용 목적
          </h2>
          <ul>
            <li>개인 건강 지표의 저장, 통계 계산 및 시각화 차트 제공</li>
            <li>사용자 본인의 건강 기록 조회 및 상담용 리포트 생성</li>
            <li>OCR·앱 잠금·선택적 Health/캘린더 연동 등 앱 기능 제공</li>
          </ul>
          <p>
            광고·마케팅·행태 추적·제3자 판매 목적으로 정보를 이용하지 않습니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">4. Storage &amp; Security (Local-First)</span>
            데이터 저장 방식 및 보안 조치
          </h2>
          <ul>
            <li>
              <strong>로컬 저장 우선:</strong> 민감 건강 데이터는 원칙적으로
              사용자 기기 내부 로컬 저장소(SQLite / Encrypted Storage)에
              저장됩니다.
            </li>
            <li>
              회사의 원격 서버로 사용자의 건강 데이터를 수집·축적·열람하지
              않으며, 광고 타깃팅 또는 제3자 마케팅 목적으로 활용하거나
              판매하지 않습니다.
            </li>
            <li>
              사용자가 OS 클라우드 백업을 켠 경우, 해당 백업은 기기/OS
              제조사 정책에 따릅니다.
            </li>
            <li>
              로컬 DB 암호화, OS 키체인/키스토어, 민감 화면 전환 시 가림 등
              프라이버시 보호 기능을 사용합니다. 완벽한 보안을 보장하지는
              않으며 기기 분실·탈옥/루팅·악성앱에 주의가 필요합니다.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="en-label">5. Third-Party Sharing</span>
            개인정보의 제3자 제공 및 위탁
          </h2>
          <p>
            회사는 법령에 규정된 경우를 제외하고 사용자의 개인정보 및 건강
            데이터를 어떠한 제3자에게도 제공하거나 위탁하지 않습니다. 앱
            스토어·기기 OS·사용자가 직접 공유를 선택한 앱의 처리는 각
            사업자 정책을 따릅니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">6. User Rights &amp; Data Deletion</span>
            정보주체의 권리 및 행사 방법
          </h2>
          <ul>
            <li>
              사용자는 언제든지 앱 내 기록 열람·수정·삭제, 데이터 전체
              삭제(제공 시), 또는 앱 삭제를 통해 기기 저장 데이터를 영구
              파기할 수 있습니다.
            </li>
            <li>카메라·Health·캘린더 등 권한은 OS 설정에서 철회할 수 있습니다.</li>
            <li>
              운영자에게 “서버 삭제 요청”을 할 서버 보관분이 없습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="en-label">7. Children</span>
            아동
          </h2>
          <p>
            본 앱은 아동을 주 이용 대상으로 하지 않습니다. 만 14세 미만(또는
            거주 지역 법정 연령)의 아동이 보호자 동의 없이 민감 건강 정보를
            입력하지 않도록 안내합니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">8. International Transfers</span>
            해외 이전
          </h2>
          <p>
            운영자 서버로 개인·건강 정보를 이전하지 않습니다. (선택) 식품 DB
            파일 다운로드 시 호스팅 지역을 경유할 수 있으나 사용자 건강
            데이터는 포함되지 않습니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">9. Policy Changes</span>
            방침 변경
          </h2>
          <p>
            방침이 변경되면 본 페이지의 시행일과 내용을 개정하고, 앱 스토어에
            기재한 URL을 유지·갱신합니다. 중요한 변경이 있으면 앱 내 공지
            또는 스토어 출시 노트로 알릴 수 있습니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">10. Contact &amp; DPO</span>
            개인정보 보호책임자 및 문의처
          </h2>
          <ul>
            <li>상호 / Legal name: {brand.legalNameEn}</li>
            <li>사업자 유형: {business.typeKo} ({business.typeEn})</li>
            <li>대표: {business.representative}</li>
            <li>이메일: {contact.supportEmail}</li>
            <li>시행일: {privacy.effectiveDateKo}</li>
          </ul>
        </section>

        <p className="mt-10 text-sm text-muted">
          본 문서는 스토어 등록을 위한 안내이며 법률 자문을 대체하지 않습니다.
          필요 시 전문가 검토를 권장합니다.
        </p>
      </div>
    </article>
  );
}
