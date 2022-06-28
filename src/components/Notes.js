import React from 'react';
import { useSelector } from 'react-redux';

function Notes() {
  const notes = useSelector((state) => state.notes.items);
  const searchTerm = useSelector((state) => state.notes.searchTerm);

  const search = notes.filter((note) =>
    note.p.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(search);
  return (
    <div className="noteCardContainer">
      {search.map((note, i) => (
        <div key={i} className="noteCard" id={note.bc}>
          <div className="nCard">
            <h3>Header {i + 1}</h3>
            <p>{note.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
