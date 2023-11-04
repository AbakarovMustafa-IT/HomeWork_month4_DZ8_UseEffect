import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { createConnection } from "./pages/page2";
import TodoList from "./pages/page1";



// Lesson 8


function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Этот код выполнится после каждого рендера компонента
    document.title = `Вы кликнули ${count} раз`;
  });

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button className="incr_btn" onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
    </div>
  );
}

export default ExampleComponent;



