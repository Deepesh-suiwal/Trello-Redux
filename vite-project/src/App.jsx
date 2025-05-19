import React from "react";
import { initData } from "./initData";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      {initData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          {item.tasks.map((items) => (
            <div key={items.id}>{items.task}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
