"use client"

import MarkdownEditor from "@uiw/react-markdown-editor";
import "@wcj/dark-mode";

function Notes() {
  return (
    <>

      <div className="flex justify-around h-[70vh]">
        <div className="flex flex-col justify-around border border-solid p-5">
          <input
            type="text"
            placeholder="Title"
            className="input input-md"
          ></input>
          <MarkdownEditor className="h-[35vh] w-[85vw]"></MarkdownEditor>
          <button className="btn btn-neutral btn-outline  bg-white p-2  rounded-full w-[120px] self-center">
            ADD NOTES
          </button>
        </div>
      </div>
      <div>
        <h1>Previous Notes</h1>
      </div>
    </>
  );
}

export default Notes;
