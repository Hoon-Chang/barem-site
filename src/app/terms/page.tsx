import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: "이용약관 (Terms of Service)",
  description: `${siteConfig.brand.appNameKo} 이용약관 / Terms of Service`,
  alternates: { canonical: absoluteUrl("/terms/") },
  openGraph: {
    title: "이용약관 | BAREM",
    url: absoluteUrl("/terms/"),
  },
};

export default function TermsPage() {
  const { brand, contact, privacy } = siteConfig;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="border-b border-line pb-8">
        <p className="text-sm font-medium tracking-[0.16em] text-muted">
          {brand.legalNameEn}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
          이용약관
        </h1>
        <p className="mt-1 text-sm text-muted">Terms of Service</p>
        <p className="mt-4 text-sm text-muted">
          시행일 / Effective date: {privacy.effectiveDateKo} (
          {privacy.effectiveDateEn})
        </p>
      </header>

      <div className="prose-legal mt-2">
        <section>
          <h2>
            <span className="en-label">1. Acceptance</span>
            약관의 수락
          </h2>
          <p>
            「{brand.appNameKo}」(이하 &quot;앱&quot;)을 설치·이용함으로써 본
            약관에 동의한 것으로 봅니다. 동의하지 않으면 앱을 이용하지
            마십시오.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">2. Service Description</span>
            서비스 설명
          </h2>
          <p>
            바램은 혈압·혈당·체온·체중·복약·증상 등 개인 건강 기록을 기기
            안에서 관리하도록 돕는 소프트웨어입니다. 의료기기·의료행위가
            아니며, 진단·처방·치료를 제공하거나 대체하지 않습니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">3. User Responsibilities</span>
            이용자의 책임
          </h2>
          <ul>
            <li>입력 정보의 정확성에 대한 책임은 이용자에게 있습니다.</li>
            <li>
              건강·의료 판단은 반드시 의사 등 전문 의료인과 상담하십시오.
            </li>
            <li>
              기기 잠금·OS 업데이트·백업 설정 등 기기 보안을 적절히
              유지하십시오.
            </li>
            <li>법령 또는 타인의 권리를 침해하는 방식으로 앱을 사용하지 마십시오.</li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="en-label">4. Privacy</span>
            개인정보
          </h2>
          <p>
            개인정보 처리에 관한 사항은{" "}
            <Link
              href="/privacy/"
              className="text-green underline-offset-2 hover:underline"
            >
              개인정보처리방침
            </Link>
            을 따릅니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">5. Disclaimer</span>
            면책
          </h2>
          <p>
            앱은 &quot;있는 그대로(AS IS)&quot; 제공됩니다. 법령이 허용하는
            범위에서 {brand.legalNameEn}은 앱 이용으로 인한 간접·특별·결과적
            손해에 대해 책임을 지지 않습니다. 의료 결정 판단은 전문의의
            진료를 받으십시오.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">6. Changes &amp; Termination</span>
            변경 및 종료
          </h2>
          <p>
            회사는 약관을 개정할 수 있으며, 개정 내용은 본 페이지에
            게시합니다. 이용자는 앱을 삭제함으로써 이용을 종료할 수
            있습니다.
          </p>
        </section>

        <section>
          <h2>
            <span className="en-label">7. Contact</span>
            문의
          </h2>
          <p>
            약관 관련 문의:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-green underline-offset-2 hover:underline"
            >
              {contact.email}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
