import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";




// Lesson 8


function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
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





