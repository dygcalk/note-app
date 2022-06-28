import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotes } from '../redux/notes/notesSLice';

function TextArea() {
  const [paragraph, setParagraph] = useState('');
  const [background, setBackground] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotes({ p: paragraph, bc: background }));

    setParagraph('');
  };
  return (
    <div className="noteAreaContainer">
      <textarea
        className="noteArea"
        placeholder="Enter your note here..."
        value={paragraph}
        onChange={(e) => {
          setParagraph(e.target.value);
        }}
      />

      <div className="colorArea">
        <div className="colorPicker">
          <label className="customRadioButton" id="pink">
            <input
              type="radio"
              name="color"
              className="colorInput"
              onChange={() => setBackground('pink')}
            />
            <span className="checkmark"></span>
          </label>

          <label className="customRadioButton" id="purple">
            <input
              type="radio"
              name="color"
              className="colorInput"
              onChange={() => setBackground('purple')}
            />
            <span className="checkmark"></span>
          </label>

          <label className="customRadioButton" id="yellow">
            <input
              type="radio"
              name="color"
              className="colorInput"
              onChange={() => setBackground('yellow')}
            />
            <span className="checkmark"></span>
          </label>

          <label className="customRadioButton" id="blue">
            <input
              type="radio"
              name="color"
              className="colorInput"
              onChange={() => setBackground('blue')}
            />

            <span className="checkmark"></span>
          </label>

          <label className="customRadioButton" id="green">
            <input
              type="radio"
              name="color"
              className="colorInput"
              onChange={() => setBackground('green')}
            />
            <span className="checkmark"> </span>
          </label>
        </div>
        <button onClick={handleSubmit} className="addNote">
          ADD
        </button>
      </div>
    </div>
  );
}

export default TextArea;
