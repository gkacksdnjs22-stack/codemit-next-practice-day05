"use client";

import { useEffect, useRef, useState } from "react";

const initialNotes = [
  { id: "initial-1", content: "작은 아이디어도 적어두면 새로운 시작이 된다." },
  { id: "initial-2", content: "오늘 배운 것 하나, 내일 해보고 싶은 것 하나." },
];

export default function Notes() {
  const [notes, setNotes] = useState(initialNotes);
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const deletingNote = notes.find((note) => note.id === deletingId);

  useEffect(() => {
    if (deletingId !== null) dialogRef.current?.showModal();
  }, [deletingId]);

  function resetForm() {
    setEditingId(null);
    setContent("");
    setError("");
  }

  function submitNote(event) {
    event.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) {
      setError("메모 내용을 입력해 주세요. 공백만으로는 저장할 수 없어요.");
      setMessage("");
      inputRef.current?.focus();
      return;
    }
    if (editingId !== null) {
      setNotes((current) => current.map((note) => note.id === editingId ? { ...note, content: trimmed } : note));
      setMessage("메모를 수정했어요.");
    } else {
      const newNote = { id: crypto.randomUUID(), content: trimmed };
      setNotes((current) => [...current, newNote]);
      setMessage("새 메모를 등록했어요.");
    }
    resetForm();
  }

  function editNote(note) {
    setEditingId(note.id);
    setContent(note.content);
    setError("");
    setMessage("");
    inputRef.current?.focus();
  }

  function closeDelete() {
    dialogRef.current?.close();
    setDeletingId(null);
  }

  function confirmDelete() {
    setNotes((current) => current.filter((note) => note.id !== deletingId));
    if (editingId === deletingId) resetForm();
    setMessage("메모를 삭제했어요.");
    closeDelete();
  }

  return (
    <div className="notes-workspace">
      <section className="panel editor" aria-labelledby="editor-heading">
        <span className="card-index">{editingId !== null ? "EDIT NOTE" : "NEW NOTE"}</span>
        <h2 id="editor-heading">{editingId !== null ? "메모 수정" : "새 메모 쓰기"}</h2>
        <form onSubmit={submitNote} noValidate>
          <label htmlFor="note-content">메모 내용</label>
          <textarea id="note-content" ref={inputRef} value={content} onChange={(event) => { setContent(event.target.value); setError(""); setMessage(""); }} placeholder="지금 떠오른 생각을 적어보세요…" rows={7} aria-invalid={Boolean(error)} aria-describedby={error ? "note-error" : "note-hint"} />
          <p id="note-hint" className="field-hint">한 문장이어도 괜찮아요.</p>
          {error && <p id="note-error" className="error" role="alert">{error}</p>}
          <div className="button-row">
            <button className="button primary" type="submit">{editingId !== null ? "수정 저장" : "메모 등록"}<span aria-hidden="true">↗</span></button>
            {editingId !== null && <button className="button secondary" type="button" onClick={() => { resetForm(); setMessage("수정을 취소했어요. 원래 메모를 유지합니다."); }}>수정 취소</button>}
          </div>
        </form>
        <p className="session-hint">이 기록장은 잠깐 머무는 공간이에요.<br />새로고침하면 처음의 메모로 돌아갑니다.</p>
      </section>
      <section className="notes-collection" aria-labelledby="collection-heading">
        <div className="collection-header"><h2 id="collection-heading">모아둔 생각 <span className="count-badge">{notes.length}</span></h2><span className="collection-caption">한 장씩, 차곡차곡</span></div>
        <p className="status-message" role="status">{message}</p>
        {notes.length === 0 ? <div className="empty-state"><span aria-hidden="true">▱</span><h3>아직 메모가 없어요.</h3><p>첫 번째 생각을 남겨보세요.</p></div> : (
          <ul className="notes-list">
            {notes.map((note, index) => (
              <li className={`note-card${editingId === note.id ? " is-editing" : ""}`} key={note.id} data-note-id={note.id}>
                <div className="note-meta"><span>NOTE {String(index + 1).padStart(2, "0")}</span>{editingId === note.id && <span className="editing-badge">수정 중</span>}</div>
                <p className="note-content">{note.content}</p>
                <div className="note-actions"><button type="button" aria-label={`${index + 1}번 메모 수정`} onClick={() => editNote(note)}>수정</button><button type="button" aria-label={`${index + 1}번 메모 삭제`} onClick={() => { setDeletingId(note.id); setMessage(""); }}>삭제</button></div>
              </li>
            ))}
          </ul>
        )}
      </section>
      {deletingNote && (
        <dialog ref={dialogRef} className="delete-dialog" aria-labelledby="delete-heading" aria-describedby="delete-description" onCancel={(event) => { event.preventDefault(); closeDelete(); }}>
          <p className="eyebrow">DELETE NOTE</p><h2 id="delete-heading">이 메모를 삭제할까요?</h2><p id="delete-description">선택한 메모 한 장을 삭제합니다.</p>
          <blockquote>{deletingNote.content}</blockquote>
          <div className="button-row"><button className="button secondary" type="button" autoFocus onClick={closeDelete}>삭제 취소</button><button className="button danger" type="button" onClick={confirmDelete}>삭제 확정</button></div>
        </dialog>
      )}
    </div>
  );
}
