"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <section className="panel counter-card" aria-labelledby="counter-heading">
      <span className="card-index">01 / 작은 시작</span><h2 id="counter-heading">한 번의 클릭, 한 걸음.</h2><p>버튼을 눌러 숫자를 올려보세요.</p>
      <output className="counter-value" aria-label="현재 숫자" aria-live="polite">{count}</output>
      <div className="button-row">
        <button className="button primary" type="button" onClick={() => setCount((value) => value + 1)}>숫자 +1</button>
        <button className="button secondary" type="button" onClick={() => setCount(0)}>초기화</button>
      </div>
    </section>
  );
}
