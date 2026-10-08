import Notes from "@/components/Notes";

export const metadata = { title: "메모 | 한 장" };

export default function NotesPage() {
  return (<>
    <section className="page-heading"><p className="eyebrow">MY LITTLE NOTES</p><h1>나의 기록장<span className="title-dot">.</span></h1><p>생각이 사라지기 전에, 한 장 남겨두세요.</p></section>
    <Notes />
  </>);
}
