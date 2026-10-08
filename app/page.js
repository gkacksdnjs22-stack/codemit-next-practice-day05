import Link from "next/link";
import Counter from "@/components/Counter";

export default function HomePage() {
  return (<>
    <section className="hero">
      <p className="eyebrow">작은 생각을, 하나씩.</p>
      <h1>오늘의 생각을<br />가볍게 남겨보세요.</h1>
      <p className="lead">떠오른 아이디어와 잊고 싶지 않은 순간.<br />메모 한 장으로 시작하는 나만의 작은 기록장입니다.</p>
      <Link className="button primary" href="/notes">메모 시작하기 <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="home-grid" aria-label="기록장 소개">
      <Counter />
      <div className="panel intro-card">
        <span className="card-index">02 / 메모</span><h2>쓰고, 고치고, 정리하고.</h2>
        <p>같은 내용도 서로 다른 메모로 보관합니다. 수정과 삭제는 선택한 한 장에만 적용돼요.</p>
        <Link className="text-link" href="/notes">기록장 열기 <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  </>);
}
