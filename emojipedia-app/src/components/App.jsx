import React from "react";
import EmojiEntry from "./EmojiEntry";
import emojipedia from "../emojipedia";


function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((entry) => {
          return (
            <EmojiEntry
              key={entry.id}
              emoji={entry.emoji}
              name={entry.name}
              meaning={entry.meaning}
            />
          );
        })}
      </dl>
    </>
  );
}

export default App;
