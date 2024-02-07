import Container from "./components/Container";
import AddTodo from "./components/AddTodo";
import AppName from "./components/appName";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  return (
    <Container>
      <AppName />
      <div className="flex justify-center flex-col gap-3 w-fit ">
        <AddTodo listItems={listItems} setTodo={setListItems} />
        {/* Todo-Items */}
        <TodoItems ListItems={listItems} />
      </div>
    </Container>
  );
}

export default App;
