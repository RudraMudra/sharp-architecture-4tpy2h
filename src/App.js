import React, { useState } from "react";

export default function App() {
  const [leftList, setLeftList] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ]);
  const [rightList, setRightList] = useState([]);

  // Move one item from left → right
  const moveToRight = (item) => {
    setRightList((prev) => [...prev, item]);
    setLeftList((prev) => prev.filter((i) => i !== item));
  };

  // Move one item from right → left
  const moveToLeft = (item) => {
    setLeftList((prev) => [...prev, item]);
    setRightList((prev) => prev.filter((i) => i !== item));
  };

  // Move all left → right
  const moveAllToRight = () => {
    setRightList((prev) => [...prev, ...leftList]);
    setLeftList([]);
  };

  // Move all right → left
  const moveAllToLeft = () => {
    setLeftList((prev) => [...prev, ...rightList]);
    setRightList([]);
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left list */}
      <div>
        <h3>Available</h3>
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            width: "150px",
            height: "150px",
            overflowY: "auto",
          }}
        >
          {leftList.map((item) => (
            <li
              key={item}
              style={{ cursor: "pointer", padding: "2px" }}
              onClick={() => moveToRight(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={moveAllToRight} disabled={leftList.length === 0}>
          &gt;&gt;
        </button>
        <button onClick={moveAllToLeft} disabled={rightList.length === 0}>
          &lt;&lt;
        </button>
      </div>

      {/* Right list */}
      <div>
        <h3>Selected</h3>
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            width: "150px",
            height: "150px",
            overflowY: "auto",
          }}
        >
          {rightList.map((item) => (
            <li
              key={item}
              style={{ cursor: "pointer", padding: "2px" }}
              onClick={() => moveToLeft(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
