// import React from 'react';
// import { useState } from 'react';
// import { useRef } from 'react';


// export default function Counter() {
//   const [age, setAge] = useState(0);

//   function increment() {
//     setAge(a => a + 1)
//   }

//   return (
//     <>
//       <h1>Your Age: {age}</h1>
//       <button onClick={() => {
//         increment()
//         increment()
//         increment()
//         increment()
//         increment()
//       }}>+5</button>
//       <button onClick={() => {
//         increment()
//       }}>+1</button>
//     </>
//   )
// }

// Lesson 6
// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times");
//   }

//   return (
//     <button onClick={handleClick}>
//       CLick me!!
//     </button>
//   )
// }

// Lesson 7 - ToDoApp

export default function TodoList({ todos, activeTab, deleteTodo, editDone, editTodo }) {
  const filteredTodos =
    activeTab === "All"
      ? todos
      : activeTab === "Active"
        ? todos.filter((todo) => !todo.completed)
        : todos.filter((todo) => todo.completed);

  return (
    <>
      {filteredTodos.length > 0 ? (
        <ul className="todo-list">
          {filteredTodos.map((entry, index) => (
            <div
              className={`todo ${entry.completed ? "completed" : ""}`}
              key={index}
            >
              {entry.completed ? (
                <li>
                  <s>{entry.text}</s>
                </li>
              ) : (
                <li>{entry.text}</li>
              )}
              {activeTab === "Active" && (
                <>
                  <button className="btn" onClick={() => editTodo(entry.text, prompt("Edit task:", entry.text))}>
                    Edit
                  </button>
                  <button className="btn" onClick={() => editDone(entry.text)}>
                    Done
                  </button>
                </>
              )}
              {activeTab === "All" && (
                <button className="btn" onClick={() => deleteTodo(entry.text)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Нет задач</p>
        </div>
      )}
    </>
  );
}
