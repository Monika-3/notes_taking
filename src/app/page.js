"use client";

import MarkdownEditor from "@uiw/react-markdown-editor";

import { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const [allnotes, setAllnotes] = useState([]);

  function addnotes() {
    if (title.trim() && notes.trim()) {
      setAllnotes([...allnotes, { title, notes }]);
      setTitle("");
      setNotes("");
    }
  }
  return (
    <>
      <div className="flex justify-around h-[70vh] pl-8 pt-5">
        <div className="flex flex-col justify-around border border-solid p-5">
          <input
            type="text"
            placeholder="Title"
            className="input input-md"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <MarkdownEditor
            height="200px"
            className="w-[85vw]"
            onChange={(text) => setNotes(text)}
            value={notes}
          ></MarkdownEditor>
          <button
            className="btn btn-neutral btn-outline  bg-white p-2  rounded-full w-[120px] self-center"
            onClick={addnotes}
          >
            ADD NOTES
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold pt-6">Previous Notes:</h1>
        <div className="flex flex-wrap gap-4 border border-solid m-9 p-2">
          {allnotes.length === 0 ? (
            <p>No notes yet.</p>
          ) : (
            allnotes.map((note, index) => (
              <div key={index} className="border p-3 my-2 rounded w-[27.5vw]">
                <h2 className="font-bold">{note.title}</h2>
                <div>{note.notes}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Notes;
