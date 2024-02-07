import AddButton from "./AddButton";

function AddTodo({ listItems, setTodo }) {
  let currentTodo = { todoName: "", dueDate: "" };
  const handleOnChangeTodoName = (currentText) => {
    currentTodo.todoName = currentText;
  };

  const handleOnChangeDate = (currentDate) => {
    currentTodo.dueDate = currentDate;
  };

  return (
    <form className="flex justify-center gap-x-4">
      <input
        className="border rounded-md relative bottom-1 px-3 border-gray-600 w-1/2"
        type="text"
        required
        name="todo"
        placeholder="Enter Todo Here"
        onChange={(e) => {
          handleOnChangeTodoName(e.target.value);
        }}
      />

      <div className="flex justify-center gap-2 w-1/2">
        <input
          className="border rounded-md relative bottom-1 border-gray-600 "
          type="date"
          name="date"
          onChange={(e) => {
            handleOnChangeDate(e.target.value);
          }}
        />

        <AddButton
          currentTodo={currentTodo}
          listItems={listItems}
          setTodo={setTodo}
        />
      </div>
    </form>
  );
}

export default AddTodo;
