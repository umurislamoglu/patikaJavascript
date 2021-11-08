import { useState } from "react";

import TodoHeader from "./Header";
import TodoArea from "./Todo";
import TodoFooter from "./Footer";

let dataList = [
  { value: "Vue Öğren" },
  { value: "React Öğren" },
  { value: "Angular Öğren" },
];

function MainFunc() {
  const [todoData, setTodoData] = useState(dataList);

  return (
    <section className="todoapp">
      <TodoHeader setTodoData={setTodoData} todoData={todoData} />
      <TodoArea todoData={todoData} setTodoData={setTodoData} />
      <TodoFooter todoData={todoData} setTodoData={setTodoData} />
    </section>
  );
}

export default MainFunc;