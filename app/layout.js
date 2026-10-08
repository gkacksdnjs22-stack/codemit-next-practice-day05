import Link from "next/link";
import "./globals.css";

export const metadata = { title: "한 장 | 작은 메모 기록장", description: "오늘의 생각을 가볍게 남기는 작은 메모 기록장" };

export default function RootLayout({ children }) {
  return (
    <html lang="ko"><body>
      <a className="skip-link" href="#main">본문으로 이동</a>
      <div className="site-shell">
        <header className="site-header">
          <Link className="brand" href="/" aria-label="한 장 홈"><span className="brand-mark" aria-hidden="true">▱</span> 한 장<span className="brand-sub">a little note</span></Link>
          <nav aria-label="주 메뉴"><Link href="/">홈</Link><Link href="/notes">메모</Link></nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer"><span>한 장 · 일상의 작은 기록</span><span>가볍게 쓰고, 새롭게 시작해요.</span></footer>
      </div>
    </body></html>
  );
}
