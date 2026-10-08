import ApiNotes from "@/mini-watch/monitor/next-frontend/components/ApiNotes";

export const metadata = { title: "DB 메모 | 한 장" };

export default function ApiNotesPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">CONNECTED NOTES</p>
        <h1>오래 남길 생각<span className="title-dot">.</span></h1>
        <p>Flask와 PostgreSQL에 저장하는 메모입니다. 새로고침 후에도 기록이 남아요.</p>
      </section>
      <ApiNotes />
    </>
  );
}
