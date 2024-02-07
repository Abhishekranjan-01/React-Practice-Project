import DeleteButton from "./DeleteButton";

function TodoItems({ ListItems }) {
  return (
    <div className="flex justify-between flex-col gap-4">
      {ListItems.map((item, i) => {
        return item.todoName.trim() === "" ? null : (
          <div key={i} className="flex justify-between ">
            <h2>{item.todoName}</h2>
            <div className="flex justify-between gap-4">
              <h2>{item.dueDate}</h2>
              <DeleteButton />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoItems;
